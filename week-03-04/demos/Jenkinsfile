pipeline {
  // This is a Jenkinsfile, it's read and parsed by Jenkins to determine how it should build, test and deploy your code

  // The first thing we'll need is an agent
  // An agent is a node defined within Jenkins (it can be hosted internally or externally) but think of it as a runtime environment for your code
  agent any

  // Stages are the next most important thing and they define all of the steps that need to occur inside this pipeline
  stages{
    // Inside of here I can define all of the stages that need to occur (in order) to complete the pipeline
    // If any stage fails for whatever reason the code stops and it doesn't continue to further stages
    stage('Build'){
      // Within each stage is a list of steps that need to occur to execute this stage

      // Recall that to build our code we ran a mvn clean package with all of our environment variables
      steps{
        sh 'echo "Build Stage Started"'
        sh 'mvn --version'
        // We'll define our environment variables directly inside of Jenkins but we'll use them here
        sh 'mvn clean -D DB_URL=${DB_URL} -D DB_USERNAME=${DB_USERNAME} -D DB_PASSWORD=${DB_PASSWORD} package'
      }
    }
    stage('Test'){
    // We haven't really touched much of testing here but if we had tests to run we'd do them here
      steps{
        sh 'echo "Test Stage Started"'
      }
    }
    stage('Deploy'){

        // Recall that to deploy our code we used the Dockerfile to create a Docker Image and then used the image
        // to run a Docker Container
        // To build an image we use the docker build command
        // to run an image we use docker run
        // NOTE: This will create slight complications on subsequent pushes due to existing docker images
        // we'll ignore it for now
      steps{
        sh 'echo "Deploy Stage Started"'
        sh 'docker build -t bio-app .'
        sh 'docker run -d -p 80:8080 -e DB_URL=${DB_URL} -e DB_USERNAME=${DB_USERNAME} -e DB_PASSWORD=${DB_PASSWORD} bio-app'
      }
    }
  }
}
