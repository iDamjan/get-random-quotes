# Mozok Project - Damjan Stojanovski

## For starting the project 
## npm install -> npm start

# API's USED 
## Quotes API
Because of problem with the provided API for quotes, Game of Thrones Quotes API is used (url: https://api.gameofthronesquotes.xyz) where the same functionality is implemented.

## Check nationality by name API
For geting the nationality code for the corresponding name https://api.nationalize.io is used, where the probabilities for the that name are always set in descending way,
which aloud me to always select the first element in the array and get the nationality code for the highest probability for the provided name.

## Get country image by nationality CODE
For geting the image for the corresponding country code https://restcountries.com/v3.1 is used

## Noticed double api calls on mount of a component
Double re-rendering can be noticed when the main components are mounted (on the /quotes and /random-quote page). 
While trying to solve this issue i came across an information that this is an normal React 18 behavior during development.
(https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react)

## SPA 
For routing react-router-dom is used. 

## Custom components
custom components are used from Material UI

## Styling 
SASS is used for styling
