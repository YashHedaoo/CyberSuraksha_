pipeline {

    agent any

    // ── Build-level environment ────────────────────────────────
    environment {
        DOCKER_HUB_REPO    = "yashhedaoof5/cybersuraksha:42"
        DOCKER_CREDENTIALS = "dockerhub-credentials"          // Jenkins credential ID
        IMAGE_TAG          = "${env.BUILD_NUMBER}"             // e.g. 42
        FULL_IMAGE         = "${DOCKER_HUB_REPO}:${IMAGE_TAG}"
        LATEST_IMAGE       = "${DOCKER_HUB_REPO}:latest"
    }

    options {
        timestamps()                        // prefix every log line with a timestamp
        timeout(time: 20, unit: 'MINUTES')  // kill the build if it hangs
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    // Triggered automatically via GitHub webhook on every push

    // ═══════════════════════════════════════════════════════════
    stages {

        // ── 1. Checkout ───────────────────────────────────────
        stage('Checkout') {
            steps {
                echo "Checking out source code..."
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                    echo "Commit: ${env.GIT_COMMIT_SHORT}"
                }
            }
        }

        // ── 2. Lint ───────────────────────────────────────────
        stage('Lint') {
            steps {
                echo "Running ESLint..."
                sh 'npm ci'
                sh 'npm run lint || true'
            }
        }

        // ── 3. Build Docker image ─────────────────────────────
        stage('Docker Build') {
            steps {
                echo "Building image: ${FULL_IMAGE}"
                withCredentials([
                    string(credentialsId: 'SUPABASE_URL',      variable: 'SUPABASE_URL'),
                    string(credentialsId: 'SUPABASE_ANON_KEY', variable: 'SUPABASE_ANON_KEY')
                ]) {
                    sh """
                        docker build \\
                            --build-arg NEXT_PUBLIC_SUPABASE_URL=\${SUPABASE_URL} \\
                            --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY=\${SUPABASE_ANON_KEY} \\
                            --label git-commit=${env.GIT_COMMIT_SHORT} \\
                            --label build-number=${env.BUILD_NUMBER} \\
                            -t ${FULL_IMAGE} \\
                            -t ${LATEST_IMAGE} \\
                            .
                    """
                }
            }
        }

        // ── 4. Push to Docker Hub ─────────────────────────────
        stage('Docker Push') {
            steps {
                echo "Pushing to Docker Hub..."
                withDockerRegistry([
                    credentialsId: "${DOCKER_CREDENTIALS}",
                    url: 'https://index.docker.io/v1/'
                ]) {
                    sh "docker push ${FULL_IMAGE}"
                    sh "docker push ${LATEST_IMAGE}"
                }
                echo "Pushed: ${FULL_IMAGE}"
                echo "Pushed: ${LATEST_IMAGE}"
            }
        }

        // ── 5. Cleanup ────────────────────────────────────────
        stage('Cleanup') {
            steps {
                sh "docker rmi ${FULL_IMAGE} ${LATEST_IMAGE} || true"
                echo "Local images removed."
            }
        }

    }
    // ═══════════════════════════════════════════════════════════

    post {
        success {
            echo """
            ✅ Build #${BUILD_NUMBER} succeeded.
            Image pushed: ${DOCKER_HUB_REPO}:${IMAGE_TAG}
            Commit: ${env.GIT_COMMIT_SHORT}
            """
        }
        failure {
            echo "❌ Build #${BUILD_NUMBER} failed. Check the logs above."
            // Uncomment to send Slack alert:
            // slackSend channel: '#deployments',
            //     color: 'danger',
            //     message: "❌ CyberSuraksha build #${BUILD_NUMBER} failed."
        }
        always {
            cleanWs()
        }
    }

}
