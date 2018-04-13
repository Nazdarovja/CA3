# CA3 - A Start Seed for JAX-RS, React and React Native based applications

![Alt text](/overview.png?raw=true "Overview")

 This project contains a start seed, which allows one to quickly get started with new applications. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Software Prerequisites
(Instructions for this seed will assume the use of this software, but instuctions should be somewhat usable in other programs)
```
Netbeans
- JAX-RS
- GSON
- mysql connector

Visual Studio Code
- React
- React-Native

Expo SDE & Expo Client (mobile)

Mysql Workbench

Other:
- Github
- Git Bash
- Node.js
```

### Installing

instructions in how to use the seed:

First, Clone/Fork the repository. Navigate to the CA3 folder.


Backend:	
```
- Open the Backend project in NetBeans.
- Add a new Persistence Unit to the project. 
- Create a local database schema (or use a remote) - establish connection through the Persistence Unit.
- Add entity classes to the Persistence Unit.
- Run the project, to start the backend locally, or deploy the .war file (from /target/ subfolder) to remote server.
```

Frontend:
```
- Open the Frontend project in Visual Studio Code.
- Open Bash
- type "yarn install" to install dependencies (or npm install)
- open file "package.json" and change the "/config/URL" field value to your backend URL
- type "yarn start" to start the development server

```

Native Frontend:
```
- Navigate to the Nativefrontend project folder
- Open Bash
- type "yarn add exp -g" to install Expo terminal tool (create user/login) 
- install Expo Client on your mobile device
- type "yarn install"
- open file "package.json" and change the "/config/URL" field value to your backend URL
- open a new Bash
- type "exp start --lan  (or empty to tunnel through Expo)
- Open Expo Client on your mobile device
- Click the project to view the app or scan the QR code from the terminal 

```

## Deployment

Add additional notes about how to deploy this on a live system


## Authors

* **Alexander Winther Hørsted-Andersen** - *cph-ah353@cphbusiness.dk* - [Github](https://github.com/awha86)
* **Mathias Bigler** - *cph-mb493@cphbusiness.dk* - [Github](http://github.com/zurina/)
* **Mikkel Emil Larsen** - *cph-ml474@cphbusiness.dk* - [Github](https://github.com/mikkel7emil)
* **Stanislav Novitski** - *cph-sn183@cphbusiness.dk* - [Github](https://github.com/Stani2980/)
