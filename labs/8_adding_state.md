# Lab 8: Adding state

Up to this point, our components are filled with hardcoded data. In this lab, we'll be adding state to a few components we created in Lab 2 and typed in Lab 7. We'll fetch data from the server and write it to state.

For all of the data fetching, handle errors gracefully. At minimum, log the error to the console and display a user-friendly message in the UI. You can either show a toast notification or un-hide a <div> that contains the message. Bonus points for showing a loading indicator while the data is being fetched.

## Fetching films
- In the Landing component, use useEffect to fetch the list of films when the component first loads. Store that list in state. Render the films you read from state instead of the hardcoded ones you might have added earlier.

## Fetching showings
- In FilmBrief/FilmCard, use useEffect to fetch the showings for that film and current day from the server. Store the showings in local state. Remember that ShowingTimes is ready to receive them in props.

We've got more API fetching to do. Those will come in other labs.