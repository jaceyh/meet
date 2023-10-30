import { render } from '@testing-library/react';
import { debug } from 'jest-preview';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
        debug();
    });
    
    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
        debug();
    });

    test('render NumberOfEventsComponent', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
        debug();
    });
         
});