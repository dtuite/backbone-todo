$(function(){
  // define a Todo model. We extend from Backbone.Model so that
  // we can inherit all the methods that provides
  window.Todo = Backbone.Model.extend({
    // we can set defaults for the model
    // every model we instanciate will have these defaults to start with
    defaults: {
      text: "feed the dog"
    }
  });

  // define a view for the Todo model
  window.TodoView = Backbone.View.extend({
    // designate the view's root element type
    // if you leave out 'tagName', Backbone will default to a div
    tagName: "li",
    // we can give the root element a class name
    className: "todo",
    // point to a template for this view
    // the template is run through underscores templating method to
    // get it ready. We can define templates in the DOM or in seperate files
    // we can overwrite a method in underscore to use our own templating
    // identifiers if we wish
    template: _.template( $("#todo-template").html() ),

    // do any initialization in here
    // this method is called automatically when we create a new TodoView
    initialize: function() {
      // the bindAll underscore method ensures that 'this' points to
      // the view in all methods. We can pass in a list of method names and
      // the object that we would like them bound to as the first arg
      _.bindAll(this, 'render');
    },
    // the render method appears in most views. It is responsible for
    // rendering the view and inserting model data
    render: function() {
      var renderContent = this.template( this.model.toJSON() );
      // Backbone uses 'el' as a property which holds the root element for
      // a view. So, here we are wrapping the rool element of this view
      // with jQuery and then using jQuery's .html() method to set the
      // innerHTML of this.el to be out renderContent
      $(this.el).html(renderContent);
      // return this for chaining purposes
      return this;
    }
  });

  // define a collection of models
  // inheriting from Backbone.Collection gives us access to a bunch awesome
  window.TodoList = Backbone.Collection.extend({
    // designate the model that this collection will be concerned with
    model: window.Todo,
    // designate a relative url from which this collection can fetch data
    url: '/todos'
  });

  // collections need views too
  window.TodoListView = Backbone.View.extend({
    // if a view is too basic to need a fully blown template
    // we can put it in the DOM and set 'el' manually like this
    el: 'ul.todoList',

    // just like the TodoView, we need to initialize
    initialize: function() {
      _.bindAll(this, 'render');
    },
    render: function() {
      // store this.collection in a var so we can access it within the _.each
      // we have access to this.collection because we are going to pass
      // it in when we instanciate a todoListView
      var collection = this.collection,
          rootEl = this.el;

      // to render a collection, we usually just want to iterate over the
      // items in the collection and render each one of them individually
      collection.each(function(todo) {
        // initialize a view for each item
        var view = new window.TodoView({
          // pass in the model so it has data from which to fill the template
          model: todo,
          // passing in the collection that a view is part of can be useful
          collection: collection
        });

        // append each view to the root element of the collection
        $(rootEl).append(view.render().el);
      });
    }
  });

  // bootstrap our application
  window.todoList = new window.TodoList();
  window.todoList.fetch();
  window.todoListView = new window.TodoListView({
    collection: window.todoList
  });
  // now that we have done that, we can just call
  // todoListView.render() in the console to see our list
});
