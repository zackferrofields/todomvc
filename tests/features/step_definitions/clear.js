module.exports = function() {

  this.Given(/^I clear completed$/, function() {
    const main = this.page.main();
    main.click('@clearCompleted');
  });
};
