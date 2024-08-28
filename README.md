![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Movie Saga


## Description
_Duration: 10 hours_

I was given a repository that rendered movie titles and their poster on the dom. I was tasked with getting details about a specific movie when the poster was clicked. I needed to: 
- load the movie details on a new page.
- make a GET request to the server and database for to receive the details for a specific movie id.
- refactor the data from the database to render the movie title, poster, description, and all the genres associated.
- use redux and sagas for my GET request and variables.
- have a button that exists on the details page that will bring the user back to the main page with all the movies.


## Make a Plan
1. I started this project by opening the given repository and looking around to understand the code I had been given.
2. Next, I drew out a plan for how I wanted my pages to look, along with routes, function, and variables I would need for each page.
 ![image](https://github.com/user-attachments/assets/54617848-0e46-4720-8fc0-cf42e8fe3448)
3. Then, I went back to the code and added comments, showing the path the requests would make and planning my variable/function names.
4. Finally, I started coding, making sure to use comments to explain the code I was adding.
5. I decided to push my understanding by using Tailwind for my styling. I had never used Tailwind before so I needed to learn how to install it appropriately as well as learn the correct notation. Below are some pictures of the final result.
   
![image](https://github.com/user-attachments/assets/160de9d8-cc07-4de1-9f7b-f615bd3eced1)



![image](https://github.com/user-attachments/assets/ee41e751-0b4e-47c9-9d1b-05c4ceac8491)




## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/v1.php) - recommended


## Installation
1. Fork and clone this repository for your own access.
2. Open up your editor of choice and run an npm install.
3. Create a database named "saga_movies_weekend",
4. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries,
5. Run npm run server in your terminal
6. Run npm run client in your terminal
7. Navigate to http://localhost:5173/


## Usage
- When a user was on the homepage they would have the ability to click on any movie poster.
- By clicking on a movie poster,this would bring the user to a new page with the details for the specific movie they chose.
- The details would include: movie title, movie poster, movie description, and all the genres associated with the movie.
- The user would then have the option to click the button on the bottom of the page.
- The button would bring them back to the hoempage.


## Built With
- Node.js
- Express
- Axios
- React.js
- Redux
- Redux-Saga
- Tailwind
- 'PG'


## License
[MIT](https://choosealicense.com/licenses/mit/) ## Do I need this? Or a different thing here?

**Note, include this only if you have a license file. GitHub will generate one for you if you want!


## Acknowledgement
Thanks to [Prime Digital Academy](https://github.com/PrimeAcademy/) who equipped and helped me to make this application a reality. 


## Support
If you have suggestions or issues, please email me at emma.molden007@gmail.com
