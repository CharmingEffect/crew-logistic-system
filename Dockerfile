FROM eclipse-temurin:17-jdk-alpine
RUN apk update & apk upgrade
RUN apk install inotify-tools dos2unix
ENV HOME = /app

RUN mkdir -p &HOME
WORKDIR $HOME
