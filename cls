# This configuration is for windows if run on Linux then file run 

echo "Running the CLS project"

#Running the frontend

cd frontend
start cmd.exe "/K npm install && npm start"

#Running the docker container for the mail development server
start cmd.exe "/K docker start -ai maildev-maildev-1"

#Running Spring Boot

cd ../backend
mvn clean compile exec:java