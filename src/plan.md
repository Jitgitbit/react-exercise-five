# Scoreboard

- Userstory
- Business logic (scope, rules)
- Design (skip it) -> do design when you're
- Data model
  - props
  - components
  - state
  - api
  - Datatypes
    - primitives
      - boolean
      - number
      - string
      - null
      - undefined
    - collections
      - objects
      - arrays
    - functions
- Processing (how are we going to transform data)

  - Input
  - Transform data
  - Output
  - operators +, - <-- add, subtract
  - conditionals
  - map, filter (js)
  - make requests (axios)
  - async functions (async / await)
  - useState (react) -> when you want to change data <-- update state
  - useEffect (react, api) -> fetch data
  - JSX -> interpolate some values to display things to the user (react)
  - Events (input) <-- we need input
    - Event Listeners (onClick, react) (input from a user)
    - Event handlers (a function -> set_myVariable, react)

- Hardcode data
- Dynamic input
- Validation (user is drunk / evil)
- Refactor (my colleague might hunt me down if I write bad code)

# Userstory 1 & 2

- As group playing a game we want to see the scores and names of players, so we know who is winning
- As a group playing a game we want to be able to change the score of a player so the score stays up to date

# Business logic

- The number of players is always the same (3)
- We don't have to be able to change the names (we can hardcode the names)

# Challenge

- Come up with a data model for this app,
- Consider how to implement it in react

# Time limit: 13

story:
3 static people,  
dynamic scores (range not defined)

- component board
- component render nameCard
  - props: name, string
  - state: score, number
- static name
- dynamic score (+ and - button) assuming in/decrement by 1
- useState
- name = static string
- score = array of numbers  
  OR array of objects: [{name: 'string', score: number}, etc ]

# Processing

- operators +, - <-- add, subtract
- useState (react) -> when you want to change data <-- update state
- JSX -> interpolate some values to display things to the user (react) <-- display
- Events (input) <-- we need input
  - Event Listeners (onClick, react) (input from a user)
  - Event handlers (a function -> set_myVariable, react)

# Execute in steps

- Create a react app
- Make components
- Test if they work
- Hardcode data -> display the data
- Test if we can see the data
- Dynamic input (event listeners / handlers)

# Feature request:

- Reset all (hard to do right now)

# Userstory:

- As a group of players I want the players to be sorted according to score, so we can easily see who is ahead

## Datamodel

Before:

- component board
- component scorecard
  - props: name, string
  - state: score, number

After lifting state

- componet board:
  - state: players[{ name: string, score: number }]
- component scorecard
  - props: name: string, score: number

## Processing

Before:

- useState in scoreCard
- eventListener -> handler -> setScore(score + 1)

After

- .map players to display them
- Array.sort the player array (read the docs)
- callback prop
  - write a function to change the score of a player
  - pass this function as a prop to the child component

## How execute our plan

- Hardcode data -> display the data
- Test if we can see the data
- Dynamic input (event listeners / handlers)
- Test if we can change the data

# Userstory

As a user I want to be able to sort by name or score so I can find the information relevant to me

## Business logic

N/A

## Data model

Before:

Board - state: - players [{ id: number, name: string, score: number}] - function: changeScore,

ScoreCard / Player - props: - id: number - name: string - score: number - changeScore: function (callback prop)

After - state: - players [{ id: number, name: string, score: number}] - sortBy: string ("name" or "score")

    - function: changeScore, some function?

ScoreCard / Player - props: - id: number - name: string - score: number - changeScore: function (callback prop)

## Processing

sortBy = "name"
sortBy = "score"

- Conditional

  - if score -> sortBy Score
  - if name -> sortBy Name

- Get input from the user

  - Make a drop down
  - Event listeners
  - Event handler

- Sorting logic
  - googled it

Go with the flow

- UI (dropdown) -> get input -> sort in different ways

Hardcode first

- Hardcode sortBy -> sort one way or the other using conditional -> get input

## Userstory

As a group players who want to keep score, we want to be able to add new player, so we can choose who we want to play with

## Business logic

- New players start with score 0

## DataModel

- How do we keep track of the new player
- Where do we keep track

Board

- state: - players [{ id: number, name: string, score: number}]
- sortBy: - string ("name" or "score")
- function: changeScore, some function?
- function: addPlayer

ScoreCard / Player

- props:

  - id: number
  - name: string
  - score: number
  - changeScore: function (callback prop)

- AddPlayerForm
  - state:
    - name: string
    - initialScore: number?
    - id: number?
  - props:
    - addPlayer: function (callback prop)

## Processing

Input

- Event listener
- Event handler
- submit button

Add a player to the array

- .push .concat [...player, newPlayer]
- setState in the parent (setPlayers)

## Executing

(Go with flow)

- [x] Make components
- [x] Check
- [x] Make form
- [x] Check
- [x] Event Listeners / Handlers
- [x] Check
- Callback prop
- Check
- Add out new player to the array
- Check
