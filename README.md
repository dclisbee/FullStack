# FullStack Project
## OVERVIEW:

Welcome to our first Full Stack project! 

As we have been learning both ends of how to build a functional website, we were able to collaberate and bring both the front end (client side) and back end (server side) together. For this project, we created an e-commerce website. A consumer is able to Login, Register, check out our About Us, find our Contact information, and of course, purchase hats!

To accomplish this, we used Node/express server, Sequelize, Supabase, Javascript, , JSON, HTML, and CSS. We sent information to our database that we created, implemented models and then created migrations so that we could make changes to our database. These steps also assisted us in creating the tables we needed. We had to seed the database in order to add data to our database. 

Our project contains full CRUD operations, which involves creating, retrieving, updating, and deleting a user. Our site is mobile responsive, contains a diagram of our DB model, and we finished it by creating a medium article so that a reader can fully understand the project. 

## THE TEAM:

#### Dustin Clisbee:
  
  Primary role: Front End

#### Deanna Masters:
  
  Primary role: Back End
  
## WHAT WE USED:
 - HTML
 - CSS
 - JavaScript
 - JSON
 - Node/express 
 - Sequelize
 - Supabase
 
## FULLSTACK PROJECT REQUIREMENTS:

- Node/express server

- Sequelize(bonus points for deploying your DB)

- At least 3 models, STRONGLY SUGGEST JUNCTION TABLE/ JOIN TABLE

- Styling (Can use css framework)

- Web responsiveness

- Clear, clean Explanation on your repo (put screenshots)

- Medium article about your project (include screenshots)

- Diagram of your DB model (use figma, draw.io, etc)

- Color palette from canva color picker

- Dom manipulation or templating engine (prefer).
  
## CHALLENGES INCLUDED:
  #### Front-End
 Challenges: Using fetch statements to grab data from the backend to bring to the front end. Setting up the Login and Register pages.  
  
 Solutions: Researching information, requesting assistance from others, and utilizing all available resources. 
  
  #### Back-End
  Challenges: The formatting and migration of the tables so that the database was functional. Ignoring the node modules on my side.
  
  Solutions: Recreated the tables using a different table name into a new database. Changing the location of the .gitignore so that it just ran on my side, instead of trying to let it run on both sides. 
  
## INSTALLATION:
To begin the process, I needed to setup/create the project by running an npm package. From there I needed to initialize and run Sequelize and Sequelize CLI. By running this, I was able to get the directories needed to setup my database. Utilizing the models and migrations files that Sequelize CLI created, I was then able to create the tables for my database and make changes as needed. I then seeded the database so that we could import data into the tables. To ensure these steps worked correctly, I needed to connect to my database. To do this I performed the psql command, straight into my DB. Success was proven when a row with the data I implemented was shown. 

It was then time to ensure we had full CRUD operations using the Model methods. Using app.post and "create", I was able to create a new user. App.get and "find all" retrieved the users by the attributes that I requested. To update any existing users, I used app.post and "update". And then to delete a user I used a simple app.delete and "destroy" to delete rows.  

## MEDIUM ARTICLE:
https://medium.com/@dmclisbee/full-stack-e-commerce-2e7c108a8bd7  
