/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";
import EventList from "../components/EventList";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppComponent;
        given('user opens the app and has not clicked on any specific events', () => {
            AppComponent = render(<App />); 
        });

        when('user receives the list of upcoming events for all cities or selected city', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const eventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        });

        then('user will see only main details for the event', async () => {
            const eventList = AppComponent.container.querySelector('#event-list');
            const eventItems = within(eventList).queryAllByRole('listitem');
            eventItems.forEach((eventItem) => {
                const details = within(eventItem).queryByTestId('.details');
                expect(details).not.toBeInTheDocument();
            });
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {

        let AppComponent;
        given('user is viewing a list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const eventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        });

        let EventDOM;
        when('user clicks button to view more details about a specific event', async () => {
            const user = userEvent.setup();
            const EventListDOM = AppComponent.container.firstChild;
            const EventDOM = within(EventListDOM).queryAllByRole('listitem')[0];

            const detailsButton = within(EventDOM).queryByRole('button');

            await user.click(detailsButton);
        });

        then('selected event expands showing all details', async () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, and, when, then }) => {
        let AppComponent;
        let EventListDOM;
        let detailsButton;
        let eventItem;
        given('user has clicked to view all details of an event', async () => {
            AppComponent = render(<App />);
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
         
            await waitFor(() => {
                const eventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        
            const eventItem = within(EventListDOM).queryAllByRole('listitem')[0];
            console.log(eventItem);

            const detailsButton = within(eventItem).queryByRole('button');

            await user.click(detailsButton);
        });

        and('the selected event details are displayed', () => {
            const details = within(eventItem).queryByTestId('details');
            expect(details).toBeInTheDocument();
        });

        when('user clicks button to collapse the selected event', async () => {
            const user = userEvent.setup();
            await user.click(detailsButton);
        });

        then('selected event details collapse', () => {
            expect(details).not.toBeInTheDocument();
        });
    });

});