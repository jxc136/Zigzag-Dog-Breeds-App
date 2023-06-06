# DogBreeds App

This is a small Angular app that displays different dog breeds and allows users to view a short bio for each breed. The app retrieves the dog breeds from an external API and provides a user-friendly interface to interact with the data.

## Features

- Fetches a list of dogs from the [Dog API](https://www.thedogapi.com/)
- Displays a dropdown list of all dog breeds fetched.
- Shows a selection of dog breeds in a grid layout
- Selecting a dog breed from the dropdown or clicking on a grid item displays a short bio of the breed
- The short bio of the selected breed includes information such as weight, height, life span, and breed group.

## Technologies Used

- Angular: The app is built using the Angular framework, which provides a robust structure for developing web applications.
- Axios: Axios is used to make HTTP requests to the external API and retrieve the dog breed data.
- Material Design: The app utilizes Angular Material components to create a visually appealing and user-friendly interface.
- Jasmine & Karma: These testing frameworks are used for unit testing the components and ensuring the app functions as expected.

## Installation

To run the Dog Breeds App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running the following commands:
   - `cd dog-breeds-app`
   - `npm install`
3. Start the development server:
   - `npm start`
4. Open your browser and navigate to `http://localhost:4200` to view the app.

## Usage

- Select a breed from the dropdown list to view a short bio for the selected breed.
- Click the "Submit" button to display the detailed information for the selected breed.
- Click on a breed card to view the detailed information for that specific breed.
- Click the "View All Dogs" button on the breed details page to return to the page showing all available dog breeds.

## Testing

A TDD approach was used for the app component, homepage component and breed-card components, however the service for fetching data from the dog-api was not TDDed owing to time constraints

## Next Steps

If I was to develop this app out further, the priority actions would be:

#### Testing

Expans test cove test coverage to ensure that critical functionality is thoroughly tested, including tests to cover error handling, user interactions and edge cases

- Add unit tests for the dog API service
- More in-depth unit tests for the homepage component functions
- E2E testing for each of the main features

#### Refactoring

- Homepage: Split the homepage into components to two components to handle user interactions and display the data
- Implement erorr handling in the service and component code

#### UI and UX

- Add additional UI elements for app presentation
- Enforce a standardised image size to ensure consistent presentation of breed cards
- Make it easier for users to navigate between pages with a menu bar
- Implemented UI functionality to enable all dogs from the API to be displayed, instead of 12
