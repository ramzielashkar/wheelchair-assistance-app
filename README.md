<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](https://github.com/ramzielashkar/wheelchair-assistance-app#-project-philosophy) • [WIREFRAMES](https://github.com/ramzielashkar/wheelchair-assistance-app#-wireframes) • [TECH STACK](https://github.com/ramzielashkar/wheelchair-assistance-app#-tech-stack) • [IMPLEMENTATION](https://github.com/ramzielashkar/wheelchair-assistance-app#-impplementation) • [HOW TO RUN?](https://github.com/ramzielashkar/wheelchair-assistance-app#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> The Wheelchair assistance app is designed to help people with disabilities find reachable places (Hospitals, Restaurants, Vendors) based on their location.
>
> These places have their own platform to access their accounts controlled by an admin.
>
> Users can surf available places, view its location on map, follow them to receive notifications and chat with them.

### User Stories

- As a user, I want to find reachable places near me, so I can reach them easily
- As a user, I want to follow these places, so I can receive their notifications
- As a user, I want to chat with these places,so I can learn more about them
- As a user, I want to search for places, so I can find them faster
- As a service provider, I want to post pictures about my place, so users can learn more about it
- As a service provider, I want to know my followers, so I can send them notifications
- As a service provider, I want to chat with users, so I can reply to their questions.
- As an admin, I want to add service providers to my app,so they can have an account
- As an admin, I want to ban users and service providers, so they can't access the app anymore
- As an admin, I want to surf active/banned users and service providers, so I can know my app users
- As an admin, I want to know the number of users/service providers on my app, so I can know my app insights
  <br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

### Client App

| Landing                          | Home                              | Map                      | Profile                          |
| -------------------------------- | --------------------------------- | ------------------------ | -------------------------------- |
| ![Landing](./readme/Landing.png) | ![Home](./readme/Feed%20Page.png) | ![Map](./readme/Map.png) | ![Profile](./readme/Profile.png) |

| Service Page                                | Favorites                           | Notifications                                | Chat                       |
| ------------------------------------------- | ----------------------------------- | -------------------------------------------- | -------------------------- |
| ![Service Page](./readme/Seller%20Page.png) | ![Favorites](./readme/Favorite.png) | ![Notifications](./readme/Notifications.png) | ![Chat](./readme/Chat.png) |

### Admin Panel

| Service Providers                                   | Clients                          | Add new seller                               |
| --------------------------------------------------- | -------------------------------- | -------------------------------------------- |
| ![Service Providers](./readme/ServiceProviders.png) | ![Clients](./readme/Clients.png) | ![Add new seller](./readme/Addnewseller.png) |

### Service Provider Website

| Followers                            | About                        | Send Notification                                 |
| ------------------------------------ | ---------------------------- | ------------------------------------------------- |
| ![Followers](./readme/followers.png) | ![About](./readme/About.png) | ![New Notification](./readme/NewNotification.png) |

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) . React Native is a popular framework to build cross-platform apps with JavaScript. Its main advantage is the ability to create cross-platform apps. Expo is a framework to build React Native apps. It is a set with tools and services built for React Native. It helps building React Native apps with ease.
- For persistent storage (database), the app uses [MongoDB](https://www.mongodb.com/) which is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.

- For chatting and live notifications, the app uses [Firebase Realtime Database](https://firebase.google.com/) service, a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.
- For admin and service providers platforms, the app uses [Reactjs](https://reactjs.org/), a JavaScript library for building user interfaces. It is used to build single-page applications.
- For backend and APIs, the app uses [Nodejs](https://nodejs.org/), an open-source, cross-platform JavaScript runtime environment.

  <br><br>
  <img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

### Client App

| Landing                                | Home                                 | Map                            | Profile                                |
| -------------------------------------- | ------------------------------------ | ------------------------------ | -------------------------------------- |
| ![Landing](./readme/clientLanding.jpg) | ![Home](./readme/clientServices.jpg) | ![Map](./readme/clientMap.jpg) | ![Profile](./readme/clientProfile.jpg) |

| Service Page                                | Favorites                                  | Notifications                                       | Chat                             |
| ------------------------------------------- | ------------------------------------------ | --------------------------------------------------- | -------------------------------- |
| ![Service Page](./readme/clientService.jpg) | ![Favorites](./readme/clientFavorites.jpg) | ![Notifications](./readme/clientNotifications.jpeg) | ![Chat](./readme/clientChat.jpg) |

### Animations

| Live Chatting                            | Notifications                         | Directions                             |
| ---------------------------------------- | ------------------------------------- | -------------------------------------- |
| ![Live Chatting ](./readme/chatting.gif) | ![Notifications](./readme/notify.gif) | ![Directions](./readme/Directions.gif) |

### Admin Panel

| Service Providers                            | Clients                               | Add new seller                                    |
| -------------------------------------------- | ------------------------------------- | ------------------------------------------------- |
| ![Service Providers](./readme/services2.png) | ![Clients](./readme/adminClients.PNG) | ![Add new seller](./readme/admin-new-service.PNG) |

### Service Provider Website

| Followers                                   | Chats                               | Send Notification                                      |
| ------------------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| ![Followers](./readme/serviceFollowers.PNG) | ![About](./readme/serviceChats.PNG) | ![New Notification](./readme/serviceNotifications.png) |

<br><br>
<img src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node and npm: [Nodejs](https://nodejs.org/)
  ```sh
  Follow the instructions given in the above link
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo

```sh
git clone https://github.com/ramzielashkar/wheelchair-assistance-app.git
```

##### BACKEND

1.  From Terminal, go to "Backend" directory

    ```sh
    cd .\Backend\
    ```

2.  Install NPM packages

    ```sh
    npm install
    ```

3.  Adding Credentials

```sh
In the 'Backend' directory create a new folder called '.env'
```

```sh
In the created folder add the following:
```

```sh
PORT="SPECIFY A PORT NUMBER ie: 8000"
DATABASE_URL="YOUR_MONGODB_DATABASE_URL"
JWT_SECRET_KEY="ADD_ANY_KEY"
```

4.  Starting the server

```sh
In the 'Backend' directory run 'node index'
```

##### Service Provider Website

1.  From Terminal, go to "admin-service-app" directory

    ```sh
    cd .\Frontend\admin-service-app\
    ```

2.  Install NPM packages

    ```sh
    npm install
    ```

3.  Adding Configurations

    ```sh
    In the 'src' directory create a new folder called 'configurations'
    ```

    ```sh
    In the created folder create a new file create two files called 'configurations.js' and "firebaseConfig.js"
    ```

    ###### Firebase Configuration

    ```sh
    In the 'firebaseConfig.js' file add your firebase app configurations, it has to be like the following:
    ```

    ```sh
    import { getApp, initializeApp } from 'firebase/app';
    import { getDatabase, ref, set } from "firebase/database";

    // CAN BE OBTAINED FROM FIREBASE
    const firebaseConfig = {
    apiKey: "YOUR_API-KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
    };

    const app = initializeApp(firebaseConfig);
    export const firebaseDB = getDatabase(app);

    ```

    ###### GOOGLE MAPS API Configuration

    ```sh
    In the 'configurations.js' file add the following:
    export const GOOGLE_MAP_API = "YOUR_GOOGLE_MAPS_KEY";
    export const baseUrl = "YOUR_SERVER_URL";
    ```

4.  Run the Website

    ```sh
    Go to the admin-service-app directory and run: npm start
    ```

##### Client App

1.  From Terminal, go to "client-app" directory

    ```sh
    cd .\Frontend\client-app\
    ```

2.  Install NPM packages

    ```sh
    npm install
    ```

3.  Adding Credentials

###### GOOGLE MAPS API Configuration

```sh
In the 'client-app' directory create a new folder called 'Credentials'
```

```sh
In the created folder, create a new file called 'credentials.js' and add the following:
```

```sh
export const GOOGLE_API_KEY = "YOUR_GOOGLE_MAPS_KEY";
export const baseUrl = "YOUR_SERVER_URL";
```

###### Firebase Configuration

```sh
In the 'client-app' directory create a new folder called 'configurations'
```

```sh
In the created folder, create a new file called 'firebaseConfiguration.js' and add the following:
```

```sh
    import { getApp, initializeApp } from 'firebase/app';
    import { getDatabase, ref, set } from "firebase/database";

    // CAN BE OBTAINED FROM FIREBASE
    const firebaseConfig = {
    apiKey: "YOUR_API-KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
    };

    const app = initializeApp(firebaseConfig);
    export const firebaseDB = getDatabase(app);
```

4.  Run the application

    ```sh
    Go to the client-app directory and run: npm start
    ```

```

```
