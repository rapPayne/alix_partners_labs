# Lab 4: Adding routing

In this lab we'll add routing so that we can navigate from component to component seamlessly. Feel free to look back at the chapter notes or look online for the low-level instructions on how to set up routing.

## Setting up routing
- Using npm, install React Router.
- Edit main.tsx to be aware of the router
- Edit App.tsx to define the routes for the application. The routes should be as follows:
  - "/" -> LandingPage
  - "/films/:filmId" -> FilmDetails
  - "/pick-seats/:showingId" -> PickSeats
  - "/checkout" -> Checkout
  - "/tickets" -> Tickets
  - A "not found" route that displays a simple message when the user navigates to an unknown route.
  
## Using `<Link>`
- Edit LandingPage.tsx. Make the navbar links use `<Link>` from React Router instead of `<a>`. Make sure they work as expected.
- Edit ShowingTimes.tsx. The showing times should be links to /pick-seats/:showingId where :showingId is the actual ID of the showing.

## Pushing to a route
Let's handle navigation via code. We'll do this in three places.
- When the user clicks the "Check out" button in PickSeats, we need to push to the /checkout route.
- Do the same for the "Buy" button in Checkout to push to /tickets
- And do it one more time; when the user clicks on a film card in LandingPage, we need to push to the /films/:filmId route.

## Route parameters
- Film details should be at "/films/:filmId". Make sure that the FilmDetails component reads the filmId from the route parameters.
- PickSeats should be at "/pick-seats/:showingId". Make sure that the PickSeats component reads the showingId from the route parameters.

Later on we'll use these IDs to fetch data. For now, you can just display them in the components to verify that routing is working.
