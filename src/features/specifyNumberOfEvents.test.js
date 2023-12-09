/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasnt specified a number, 32 events are shown by default.', ({ given, when, then }) => {

        let AppComponent;
        given('user hasnt selected a specific number of events to be shown', () => {
            AppComponent = render(<App />);
        });

        when('user sees a list of all events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeInTheDocument();
            })
        });

        then('the default amount of events, 32, are shown', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(32);
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given(/^user sees (\d+) events and would like to view another number of events$/, (arg0) => {

        });

        when('user inputs another number', () => {

        });

        then('user will be shown the amount of events they have input', () => {

        });
    });

});