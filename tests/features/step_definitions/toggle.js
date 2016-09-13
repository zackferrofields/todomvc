module.exports = function() {
  this.Given(/^I toggle a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.click('@toggle');
  });

  this.Then(/^I see a todo "([^"]*)"$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@latest').attribute('className').to.contain(name);
  });

  this.When(/^I untoggle a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.click('@toggle');
  });

  this.Then(/^I don't see a todo "([^"]*)"$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@latest').attribute('className').not.to.contain(name);
  });

  this.Given(/^I toggle all$/, function() {
    const main = this.page.main();
    main.click('@toggleAll');
  });

  this.Then(/^I see all todos "([^"]*)"$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@all').attribute('className').to.contain(name);
  });

  this.When(/^I untoggle all$/, function() {
    const main = this.page.main();
    main.click('@toggleAll');
  });

  this.Then(/^I don't see all todos "([^"]*)"$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@all').attribute('className').not.to.contain(name);
  });
};
