$ ->
  class window.Todo extends Backbone.Model
    defaults:
      text: "feed the dog"

  class window.TodoView extends Backbone.View
    tagName: 'li'
    className: 'todo'
    template: _.template( $('#todo-template').html() )

    # don't need _.bindAll because use '=>' here
    render: =>
      renderContent = @template( @model.toJSON() )
      $(@el).html(renderContent)
      this

  class window.TodoList extends Backbone.Collection
    model: window.Todo
    url: '/todos'

  class window.TodoListView extends Backbone.View
    el: "ul.todoList"

    render: ->
      # don't need to reassign vars because use '=>' here
      @collection.each (todo) =>
        view = new window.TodoView
          model: todo
          collection: @collection
        $(@el).append view.render().el

  window.todoList = new TodoList()
  window.todoList.fetch()
  window.todoListView = new TodoListView
    collection: window.todoList
