pipeline {
    agent {
        docker { image 'node:14-alpine' }  
    }
    stages {
        stage('build') {
            steps {
                sh 'rm -rf sample'
                sh 'mkdir sample'
                sh 'cd sample'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}
