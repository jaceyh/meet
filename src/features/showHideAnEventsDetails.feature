Feature: Show/Hide event details
    Scenario: An event element is collapsed by default.
        Given user opens the app and has not clicked on any specific events
        When user receives the list of upcoming events for all cities or selected city
        Then user will see only main details for the event

    Scenario: User can expand an event to see details.
        Given user is viewing a list of events
        When user clicks button to view more details about a specific event
        Then selected event expands showing all details

    Scenario: User can collapse an event to hide details.
        Given user has clicked to view all details of an event and the selected event details are displayed
        When user clicks button to collapse the selected event
        Then selected event details collapse