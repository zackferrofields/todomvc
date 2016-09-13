module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    newTodo: {
      selector: 'input.new-todo'
    },
    toggleAll: {
      selector: 'input.toggle-all'
    },
    clearCompleted: {
      selector: '.clear-completed'
    },
    title: {
      selector: 'h1'
    },
    footer: {
      selector: 'footer'
    },
    active: {
      selector: 'a[href="#/active"]'
    },
    completed: {
      selector: 'a[href="#/completed"]'
    }
  },
  sections: {
    todoList: {
      selector: '.todo-list',
      sections: {
        all: {
          selector: 'li'
        },
        latest: {
          selector: 'li:last-child',
          elements: {
            label: {
              selector: 'label'
            },
            toggle: {
              selector: 'input.toggle'
            },
            delete: {
              selector: 'button.destroy'
            }
          }
        }
      }
    },
    todoCount: {
      selector: '.todo-count',
      elements: {
        items: {
          selector: 'strong'
        }
      }
    }
  }
};
