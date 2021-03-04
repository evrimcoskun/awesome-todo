<template>
  <div class="app">
    <h1 class="md-headline app-title">Awesome To-Do App</h1>
    <md-field>
      <md-input v-model="currentTodo" @keydown.enter="addTodo()" type="text" placeholder="Add a todo"></md-input>
    </md-field>
    <md-list class="todos" v-if="todos.length > 0">
      <md-list-item v-for="todo in todos" :key="todo.id" :class="{completed: todo.completed}" @dblclick="setEdited(todo.id)">
        <md-checkbox v-model="checkedTodos" :value="todo.id" @change="toggleTodo(todo)" :id="todo.id"></md-checkbox>
        <span class="label" :class="{hide: todo.id == editedTodoId}">{{ todo.label }}</span>
        <md-field md-inline class="edit-todo" :class="{show: todo.id == editedTodoId}">
          <md-input v-model="editedTodo" @keydown.enter="updateTodo(todo)" placeholder=""></md-input>
        </md-field>
        <md-button @click="removeTodo(todo)" class="md-icon-button md-accent">
          <md-icon>delete</md-icon>
        </md-button>
        
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: '',
      editedTodoId: null,
      editedTodo: '',
      checkedTodos: []
    };
  },
  computed: {
    editedTodoText() {
      console.log(this.editedTodo)
      return this.editedTodo.label;
    }
  },
  methods: {
    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false});
      this.currentTodo = '';
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    setEdited(id) {
      const todo = this.todos.find(todo => todo.id === id)
      this.editedTodo = todo.label
      this.editedTodoId = todo.id;
    },
    updateTodo(todo) {
      todo.label = this.editedTodo;
      this.editedTodoId = null;
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    }
  }
};
</script>

<style>
  body {
    padding: 50px 20px;
  }
  .app {
    max-width: 500px;
    margin: auto;
  }
  .app-title {
    text-align: center;
  }
  .edit-todo.md-field {
    display: none;
  }
  .show {
    display:inline !important;
  }
  .hide {
    display: none;
  }
  .completed {
    opacity: 0.3;
  }
  .completed .label {
    text-decoration: line-through;
  }
</style>
