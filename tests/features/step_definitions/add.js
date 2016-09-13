module.exports = function() {
  this.Given(/^I add a new todo "([^"]*)"$/, function(name) {
    const main = this.page.main();
    main.setValue('@newTodo', [name, this.Keys.ENTER]);
  });

  this.Then(/^I see "([^"]*)" is displayed$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.expect.element('@label').text.to.equal(name);
  });

  this.Then(/^I see a todo count of "([^"]*)"$/, function(count) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    todoCount.expect.element('@items').text.to.equal(count);
  });

  this.Then(/^I see input without "([^"]*)"$/, function(text) {
    const main = this.page.main();
    main.expect.element('@newTodo').attribute('value').not.to.equal(text);
    main.expect.element('@newTodo').attribute('value').to.equal('');
  });
};
