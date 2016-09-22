import _ from 'lodash';

export default {
  
  setTodos(todos) {
    if (_.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    } 
  },
  
  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];
    
    try {
      todos = JSON.parse(stringTodos);
    } catch(err) {
      console.log(err);
    }
    
    return _.isArray(todos) ? todos : [];
    
  },
  
  filterTodos(todos, showCompleted, searchText) {
    let filterTodos = todos;
    
    // Filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })
    
    // Filter by searchText
    filterTodos = filterTodos.filter((todo) => {
      return todo.text.toLowerCase().indexOf(searchText) > -1 ? true : false;
    })
    // Sort todos with non-completed first
    filterTodos.sort((a ,b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })
    return filterTodos;
  }
};