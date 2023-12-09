Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given  user hasnt selected a specific number of events to be shown
        When  user selects their city
        Then the default amount of events, 32, are shown

    Scenario: User can change the number of events displayed.
        Given user would like to view a smaller or larger number of events
        When user inputs another number 
        Then user will be shown the amount of events they have input
