@filter
Feature: Filter todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "filter todos"

  Scenario: User should be able to filter active
    Given I filter active
    Then I see todos
    And I see the route "active"
    When I filter completed
    Then I don't see todos
    And I see the route "completed"
    When I toggle all
    Then I see todos
