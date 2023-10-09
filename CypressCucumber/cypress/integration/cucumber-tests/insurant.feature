Feature: Register insurance for a vehicle

    As a user 
    I want to register a insurance for my vehicle

    Scenario: quote a valid insurance
        Given open sample application
        When insert vehicles data
        And insert insurance data
        And insert product data
        And select price option
        Then send quote