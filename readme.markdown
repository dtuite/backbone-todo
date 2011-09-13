 1. Talk about
  - What is backbone
   - MVC for client side JS. Bit different than the normal MVC pattern 
   - what are the core classes
  - Any dependancies
   - underscore, something to do Ajax
  - Some history
   - Who made it
   - Is it gaining traction
   - Where is it being used

 2. Get set up
  - Download the framework from Github: git@github.com:dtuite/backbone-todo.git
  - install node - Macports, homebrew
  - install express with npm (within the framework directory)
  - start server (within framework dir)
  - open: framework/public/js/script.js

 3. Start writing
  1. Make a model
   - What can we do with it?
   - show the get, set and has methods
   - show how we can set defaults

  2. Make a view for that model
   - root element, class
   - the template: property. Show how we can use this
   - the initialize function, what it does
   - the render method, what it does
   - show in the console how we can render a view in the dom

  3. Make a collection
   - start the server and fetch from it
   - show how we have retreived the data from the server

  4. Write a view for the collection
   - give it a root element directly from the DOM
   - give it an initialize function and a render finction
   - in render, iterate through the models in the collection,
     give them each a view, and call render on each one

  5. Bootstrap

  6. Bind an event callback to one of the models
   - add the callback in initialize
   - change the model data in the console and see the view update

   7. ???

   8. profit
