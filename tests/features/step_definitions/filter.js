module.exports = function() {

  this.Given(/^I filter active$/, function() {
    const main = this.page.main();
    main.click('@active');
  });

  this.When(/^I filter completed$/, function() {
    const main = this.page.main();
    main.click('@completed');
  });

  this.Then(/^I see todos$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@all').to.be.present;
  });

  this.Then(/^I don't see todos$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@all').not.to.be.present;
  });

  this.Then(/^I see the route "([^"]*)"$/, function(route) {
    this.assert.urlContains(route);
  });
};
