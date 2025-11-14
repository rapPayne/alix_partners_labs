# 9 Zustand

In this lab we'll be modernizing our data fetching using `use` but the main attraction will be setting up a state container with Zustand.

## Using `use` for data fetching
- Refactor the data fetching in the LandingPage component to use `use` instead of `useEffect` and `useState`.

Note: The server has the ability to delay responses by going `node apiServer --delay 2000`. You can use this to see your loading states.

## Setting up Zustand
- Install Zustand in your project with npm.
- Create a new file called `store.ts` in the `src` directory.
- In this file, import create from 'zustand' and create a store to hold the global state.
- The store should have state for the user's cart and selected seats, as well as any other global state you need.

## Using Zustand for the films array
Let's try a cool technique some would call memoization. The user *may* navigate directly to `daam.com/films/123` and if they do we need to fetch the film. But if they navigate to it from the Landing page, the film we need is already in the store. Why go fetch it again? It'll be much faster to read from what's in memory already.
- Edit your Landing page component. Find where you're fetching the films. In that spot also load the films into your store.
- Now edit FilmDetails. In there, check to see if the store's `films` property is truthy and has the current film in it. If so, use it. If not fetch it.

## Pick seats
Here's where we'll finally get to draw our seat map.
- Edit PickSeats.tsx. In either a useEffect/useState or a use, fetch the current theater.
  - Hint: Your component is getting a showingId as a route parameter. You'll use that to fetch the showing. The showing has the theaterId. Use that to fetch the theater itself. The theater has an array of tables and each table has an array of seats.
- Write some JSX to render the tables and seats. (Hint: Might be a good time to decompose a <Seat> component).

## Selecting seats
- Make each seat clickable by putting an onClick handler on it.
- When clicked, the seat should be added to your cart in the store. 

## Reserved seats
Some seats in a showing will have been sold to other customers. Let's handle that.
- On component load, fetch reservations for that showing.
- When rending a <Seat>, pass isReserved into it as a prop.
- If the seat is reserved, make it disabled.
  - In HTML, most elements have a `disabled` attribute. 

## Coloring the seats
PickSeats is almost finished. The user should be able to easliy see the status of all seats.
- Using either inline styles or CSS classes, render each seat in one color when available, a different color when selected, and a third color when reserved.

![the seat selection component](/assets/PickSeats.png)