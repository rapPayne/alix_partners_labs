
# Lab 6: Decomposing Components

## Decomposing the loading indicator
We'll start off with an easy one. 
- In PickSeats, LandingPage, and FilmDetails you have the same loading indicator. Make a new component called LoadingIndicator.tsx.
- Move the loading indicator code into that component.
- Replace the loading indicator code in the other pages with an instance of `<LoadingIndicator />`.

## Decomposing DatePicker
That `<section>` in LandingPage.tsx where you're displaying the days of the week should be broken into its own component called DatePicker. 
- Create DatePicker.tsx
- In it,  display the days of the week as you did before.
- When the user selects a day, console.log the selected date for now.
- Place an instance of `<DatePicker />` in `<LandingPage />` where the old code was. Put an instance in `<FilmDetailsPage />` as well.

## Decomposing FilmBrief
Again on `<LandingPage />`, notice that you're showing essentially the same film card six times but each with a different film.
- Decompose that section into a new component called FilmBrief.tsx.
- This should receive a Film object as props. Make sure they're strongly typed.
If you've done this right, your LandingPage.tsx should be much shorter and cleaner now. Your FilmBrief component is single-purpose and reusable.

## Making ShowingTimes Reusable
Finally, notice that you're also rendering the same showing times section in both LandingPage.tsx and FilmDetailsPage.tsx. Up to now, all showing times are hardcoded.
- Have ShowingTimes.tsx accept a list of showings as props. Pass the appropriate showings from LandingPage and FilmDetailsPage.