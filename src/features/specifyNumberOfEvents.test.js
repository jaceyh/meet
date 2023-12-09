/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('user hasnt selected a specific number of events to be shown', () => {

        });

        when('user selects their city', () => {

        });

        then('the default amount of events, 32, are shown', (arg0) => {

        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('user would like to view a smaller or larger number of events', () => {

        });

        when('user inputs another number', () => {

        });

        then('user will be shown the amount of events they have input', () => {

        });
    });

});