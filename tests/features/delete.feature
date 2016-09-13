@delete
Feature: Delete todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "delete todo"

  Scenario: User should be able to delete a todo
    Given I delete a todo
    Then I don't see todos
    And I see a todo count of ""
