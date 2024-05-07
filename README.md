# Getting Started

With latest Node LTS installed, run the following commands:

```sh
yarn install && yarn start
```

Navigate to `http://localhost:3000/`.

# Code and Design Decisions

## Added Libraries:

SASS for nested class names.

## Not Completed:

### Tests

I did not write tests due to time constraints, however, if I had time I would have tested:

- Adding/removing a favorited listing and verifying that state updates are reflected accurately in the UI.
- Verified that the data coming from the api is processed and displayed correctly in the UI.
- Ensured the function to calculate the number of bathrooms gives the expected result each time.

### Responsiveness

I added responsive using CSS grid but I would have liked to have spent more time refining the card sizes and breakpoints for each screen size.
