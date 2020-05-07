var study = new Vue({
    el: '#vue-app',
    data: {
        heading: 'TODO',
        newTodo: '',
        todos: [
            /*
      {text: 'add some todos'},
      {text: 'add2 some todos'}
      */
        ],
        doneTodos: [],
    },
    methods: {
        addTodo: function () {
            console.log('todo function');
            var text = this.newTodo.trim();
            if (text) {
                console.log('todo if');
                this.todos.push({ text: text });
                this.newTodo = '';
            }
        },
        test: function () {
            console.log('');
            this.heading = 'OK';
        },
        removeTodo: function (index) {
            console.log('remove func');
            this.doneTodos.push(this.todos[index]);
            this.todos.splice(index, 1);
        },
    },
});
