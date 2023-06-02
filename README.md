
<a name="readme-top"></a>


<br />
<div align="center">
  <a href="https://github.com/CharmingEffect/crew-logistic-system">
    <img src="frontend/public/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CLS -  Crew Logistic System</h3>

  <p align="center">
    <br />
    <a href="https://github.com/CharmingEffect/crew-logistic-system"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://cls.arkadius.one/">View Demo</a>
    ·
    <a href="https://arkadius.one/">Report Bug</a>
    ·
    <a href="https://arkadius.one/">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Crew Logistic System</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Crew Logistic System

[![Product Name Screen Shot][product-screenshot]](https://cls.arkadius.one/)

The project topic is a web application called Crew Logistic System. The functionality is like already existing system such as Employee Management System. The motivation which has been pushed me to create the project is that I am part-time employee of the company. Dur-ing work at the company, I have realized what are the problems and how current system is inconvenient from the crew’s perspective. I have decided to develop a web application to solve the issues.
The software will be designed to help the company Pinnacle Crew to manage their crew members and jobs. The project is interesting because it is a real-life project, and it is a good opportunity to learn how to develop a web application. The problem in hands is that the company Pinnacle Crew is using a SMS system to manage crew member. The jobs are events that the companies of events are organizing, and the crew members are the people that are working on the events. The admin sends jobs to specific crew members. The crew members must confirm or reject by doing specific action in the app. The usefulness of the app is that it will help the company to manage their crew members and jobs more efficiently.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- STACK TECHNOLOGIES -->

### Built With

The system has been created with following technologies:

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Node.js][Node.js]][Node-url]
* [![Java][Java]][Java-url]
* [![Spring Boot][Spring Boot]][Spring Boot-url]
* [![Docker][Docker]][Docker-url]
* [![MySQL][MySQL]][MySQL-url]




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Project Setup and Execution

There are two profiles that have been implemented for the software, namely the deploy and dev profiles. The dev profile, which stands for development, has been designed to facilitate making changes on the fly. To achieve this state, certain dependencies need to be installed.

### Dependencies for "dev" profile (locally) :

- OpenJdk version 17.0.6 (Java), 								         
- NodeJS version 16.19.1, 								                       
- NPM 8.19 (which comes with Node),
-	MySQL 8.0.32
- Apache Maven 3.6.3.

### Execute the following commands to install the dependencies:

```sh
sudo apt install openjdk-17-jdk
sudo apt install nodejs
sudo apt install npm
sudo apt install mysql-server
sudo apt install maven
```
To run the web app locally, the following steps need to be followed:

1. Clone the repo
   ```sh
   git clone https://github.com/CharmingEffect/crew-logistic-system.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create a database in MySQL
    ```sh
    CREATE DATABASE cls;
    ```

4. Run the backend
    ```sh
    mvn spring-boot:run
    ```
5. Run the frontend
    ```sh
    npm start
    ```
6. Open the browser and go to http://localhost:3000


### The project can be also run with docker using following commands:

1. Clone the repo
   ```sh
   git clone https://github.com/CharmingEffect/crew-logistic-system.git
    ```
2. Build the docker image
    ```sh
    docker build
    ```
3. Run the docker image
    ```sh
    docker-compose up
    ```
4. Open the browser and go to http://localhost:3000





<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

 -->



<!-- CONTACT -->
## Contact

[Arkadiusz Grudzien](https//arkadius.one) - arkadiuszgrudzien@yahoo.com

Project Link: [https://github.com/CharmingEffect/crew-logistic-system](https://github.com/CharmingEffect/crew-logistic-system)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: frontend/public/cls.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[Java-url]: https://www.java.com/en/
[Spring Boot]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[Spring Boot-url]: https://spring.io/projects/spring-boot
[Docker]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[MySQL]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/



