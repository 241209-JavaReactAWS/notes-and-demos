# This file is called a Dockerfile, we'll get to its uses in a minute

# GOAL: Deploy our application via a container to ensure it behaves consistently no matter the deployment
# environment

# Steps to do that:
# Creating an Image (Blueprint for a container)
#       We create an image by using a Dockerfile which outlines the steps needed to create the image and hold
#       the necessary data
# Distributing the image itself (optional)
#       Share this image for others to pull via the docker hub
# Running the application from the image in a container
#       By using docker/podman we'll use the image to run a container and start our application

# Things we need inside a Dockerfile
#   Base Image to work with
#   Copy the executable to our image itself
#   Expose any ports or set any necessary settings
#   Give a command that is used to start the container itself

# FROM is used to specify the parent/base image, we'll build the container on top of this
FROM amazoncorretto:17

# The next step is to pull in an executable version of the code that is bundled together with its dependencies
# We packaged our application by using the mvn clean package command which created a JAR file that we can
# now copy to our image
COPY target/app.jar app.jar

# At this point, we've built an executable version of our code (app.jar) and are giving it an environment to run
# in (amazoncorretto:17), now we have a couple more steps to get everything working

# This application is a WEB APPLICATION, it listens for requests on a specific port. Well containers are designed
# to be isolated from outside interactions so we need to explicitly mark that the container that's created is
# going to listen on this port here
# We do that by using EXPOSE
EXPOSE 8080

# Add in the actual command to run the code
# java -jar app.jar
# We do this by using the CMD keyword
CMD ["java", "-jar", "app.jar"]