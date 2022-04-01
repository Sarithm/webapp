node {
      def app
      stage('Clone repository') {
            checkout scm
      }
      stage('Build') {
            sh "/usr/local/bin/npm i react-scripts; /usr/local/bin/npm run build"
      }
      stage('Deploy') {
            sh "aws s3 cp build/. s3://dev-ats-webhost-sarithm/ --recursive"
      }
}