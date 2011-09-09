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
      //
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

});
