module.exports = function() {

  this.Given(/^I delete a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.moveToElement('@label', 0, 0);
    latest.click('@delete');
  });
};
