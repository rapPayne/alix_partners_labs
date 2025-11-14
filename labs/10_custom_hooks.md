# Custom Hooks

## Creating an authentication hook
- Create a new file called `useAuth.ts`.
- In this file, export a custom React hook called `useAuth` that manages user authentication state. It should provide methods for registering, logging in, logging out, an isAuthenticated boolean, and a user object.
- Use React's `useState` and `useEffect` hooks to manage and persist authentication state (e.g., using localStorage, zustand, or React context).
- Make sure to type the hook properly using TypeScript.

## Login component
- Create a new component called `Login.tsx`.
- This component should provide a form for users to enter their username and password.
- When the form is submitted, use the `useAuth` hook to log the user in.
- Display appropriate messages for successful login or errors.

## Logging out
- In the `LandingPage` component's nav bar, add a "Logout" button that uses the `useAuth` hook to log the user out when clicked.
- Ensure that the nav bar updates appropriately based on the user's authentication state. 
  - When logged in, show the user's username and a "Logout" button.
  - When not logged in, show "Login" and "Register" buttons. 

## The Register component
- Create a new component called Register.tsx.
- This component should allow a user to register for an account by providing a username, email, password, ... all the things.
- Use useAuth to handle the registration process. You can measure success by seeing the new user in the database or examing the network tab in your browser's developer tools.
- Make sure to handle loading and error states appropriately.
![Register component](../assets/register.png)

Note: The login API route returns a JWT. If you want an extra challenge, do something with it like store it in localStorage and use it in the Authorization header for future requests that require authentication.