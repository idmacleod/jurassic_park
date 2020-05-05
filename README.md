# Homework: Jurassic Park

### Learning Objectives

- Be able to use the fundamental JavaScript language features and data types
- Be able to create an application using multiple interacting objects
- Be able to write unit tests using Assert in combination with Mocha
- Be able to run test files with Mocha using an npm script

## Brief

John Hammond has tasked you with creating an app to help him manage his theme park. He needs to be able to track and manage information about the various dinosaurs in his park and the number of visitors that they will attract.

Use the start point provided, which contains the the first test for the `Dinosaur` model and the uncompleted tests for the MVP `Park` model. You will need to write your own tests for the extension tasks.

### MVP

A dinosaur must have:

- A species
- A diet (e.g. carnivore, herbivore or omnivore)
- An average number of visitors attracted per day

A park must have:

- A name
- A ticket price
- A collection of dinosaurs

A park must be able to:

- Add a dinosaur to its collection of dinosaurs
- Remove a dinosaur from its collection of dinosaurs
- Find the dinosaur that attracts the most visitors
- Find all dinosaurs of a particular species
- Calculate the total number of visitors per day
- Calculate the total number of visitors per year
- Calculate the total revenue from ticket sales for one year

### Extensions

A park must be able to:

- Remove all dinosaurs of a particular species
- Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type  
Example: `{ 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }`

**Hint**: We want to avoid removing items from arrays while iterating over them. This is because iteration uses the index number to access the current item, and if you remove an item during one of the iterations, the position of each of the following items will be changed and lead to unexpected results. You will need to keep this principle in mind when removing all the dinosaurs of a particular species.

### Planning

The project already has a `models` folder with a `specs` folder inside. Most of our setup is done, but you still need to:

- Initialise npm with `npm init`
- Install mocha as a dev dependency with `npm install -D mocha`
- Update the `npm test` script in the package.json run your spec files with mocha using `mocha models/specs`
- Create a .gitignore file to ignore the node_modules directory


### Considerations

Remember to use the appropriate `assert` method for the data types you are comparing in your tests.
