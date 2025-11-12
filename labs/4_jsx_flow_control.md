
# Lab 4: JSX Flow Control

In this lab, we'll add some flow control to our JSX code using conditional rendering and loops.

## Getting some temporary data
- Open your browser and navigate to http://localhost:3008/api/films. You'll see an array of film objects in JSON format. Copy that array.
- In your Landing.tsx file, create a variable called "films" and set it equal to the array you just copied. This will allow us to work with some temporary data.
- Do the same with the film details. Open http://localhost:3008/api/films/1 and copy the JSON object you see there. In FilmDetails.tsx, create a variable called "film" and set it equal to that object.
- Once again, do the same with the theater data. Open http://localhost:3008/api/theaters/1 and copy the JSON object you see there. In PickSeats.tsx, create a variable called "theater" and set it equal to that object.
- Last one. Do the same with the user data. Open http://localhost:3008/api/user/1 and copy the JSON object you see there. In App.tsx, create a variable called "user" and set it equal to that object.

## App.tsx
- In App.tsx, you're rendering the `<nav>`. In that `<nav>`, add a variable called "user". If user is truthy, your nav should show "cart", "logout", and "account". If user does not exist, it should show "login" and "register".

## FilmDetails.tsx
- In FilmDetails.tsx, create a variable called "film". If film is falsey, show the loading indicator, otherwise show your film details.

## Landing.tsx
- On the Landing component, create a variable called "films" which is an array. If films has a length of 0, show the loading indicator, otherwise show your films.
- Speaking of which, that films array that you populated earlier contains multiple films. Use the .map() function to loop over each film and render one film card for each one. Don't forget to add a unique "key". This is where we'll convert the hardcoded film cards into dynamic ones.
- Let's do the same with the days of the week in your day picker -- that list of days. Have it start with today's day of the week and loop over the next 5 days.

## PickSeats.tsx
- Currently you're showing a loading indicator. Continue to show that if the "theater" object is falsey. If there is a theater, show "Theater Loaded" for now. Later we'll create the seat map.