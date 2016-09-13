@toggle
Feature: Toggle todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "todo toggle"

  Scenario: User should be able to toggle a todo
    Given I toggle a todo
    Then I see a todo "completed"
    And I see a todo count of "0"
    When I untoggle a todo
    Then I don't see a todo "completed"
    And I see a todo count of "1"

  Scenario: User should be able to toggle all
    Given I toggle all
    Then I see all todos "completed"
    And I see a todo count of "0"
    When I untoggle all
    Then I don't see all todos "completed"
    And I see a todo count of "2"
