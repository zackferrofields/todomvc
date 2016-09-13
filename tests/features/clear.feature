@clear
Feature: Clear todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "all todos"
    And I toggle all

  Scenario: User should be able to clear completed
    Given I clear completed
    Then I don't see todos
    And I see a todo count of ""
