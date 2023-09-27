Meet app is a PWA application created using React.js.

# User Stories
● As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.
● As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
● As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.
● As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.
● As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.
● As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.


# Features & Scenarios
## Feature 1: Filter Events By City
### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
**Given:** user hasn’t searched for any city 
**When:** the user opens the app 
**Then:** user should see a list of upcoming events for all cities 

### Scenario 2: User should see a list of suggestions when they search for a city.
**Given:** the main page is open 
**When:** user starts typing in the city box 
**Then:** user should receive a list of cities (suggestions) that match what they’ve typed 

### Scenario 3: User can select a city from the suggested list.
**Given:** user was typing in “Berlin” in the city box AND the suggested list of cities is showing  
**When:** the user selects a city (e.g. “Berlin, Germany”) from that list;  
**Then:** their city should be changed to that city (“Berlin, Germany”) AND the user should receive a list of upcoming events in that city 


## Feature 2: Show/Hide Event Details
### Scenario 1: An event element is collapsed by default.
**Given:** user hasn’t clicked on any specific events 
**When:**  user receives the list of upcoming events for their specific city 
**Then:** user will see only main details for the event 

### Scenario 2: User can expand an event to see details.
**Given:** user would like to see more details about a specific event 
**When:** user clicks to expand a specific event  
**Then:** selected event expands showing all details 

### Scenario 3: User can collapse an event to hide details.
**Given:** user has viewed all details of an event and wants to go back to the events list view 
**When:** user clicks to collapse the selected event 
**Then:** selected event details collapse AND user’s view returns to events list view 


## Feature 3: Specify Number of Events
### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
**Given:**  user hasn’t selected a specific number of events to be shown 
**When:**  user selects their city 
**Then:** the default amount of events (32) are shown 

### Scenario 2: User can change the number of events displayed.
**Given:** user would like to view a smaller or larger number of events 
**When:**  user may select another amount from a dropdown menu for “number of events displayed” 
**Then:** user will be shown the amount of events they prefer to view 


## Feature 4: Use the App When Offline
### Scenario 1: Show cached data when there’s no internet connection.
**Given:** users want to use the app without needing an internet connection 
**When:** a user uses the app without internet connection 
**Then:** the App loads with cached data 

### Scenario 2: Show error when user changes search settings (city, number of events).
**Given:** the app is using cached data when a user is using the app without internet connection 
**When:** a user changes the search settings (city or number of events) . 
**Then:** the app displays an error 


## Feature 5: Add an App Shortcut to the Home Screen
### Scenario 1: User can install the meet app as a shortcut on their device home screen.
**Given:** the user would like to access the meet app easily  
**When:** the user clicks on the “Install shortcut” button 
**Then:** the app will be added to the user’s home screen 


## Feature 6: Display Charts Visualizing Event Details
### Scenario 1: Show a chart with the number of upcoming events in each city.
**Given:** the user would like to see a visual representation of the amount of events in each city 
**When:** a user clicks on the “All City Events” button 
**Then:** a chart displaying the number of events in each city is shown

