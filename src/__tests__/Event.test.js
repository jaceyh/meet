import { render } from '@testing-library/react';
import { debug }from 'jest-preview';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data'

const mockEvent = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
        debug();
      });

    test('renders event location', () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    });

    test('renders event time', () => {
        expect(EventComponent.queryByText(mockEvent.created)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('event details hidden by default', () => {
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('details are shown when user clicks Show Details button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);

        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    /*test('Show Details button changes to Hide Details button on user click', async () => {
        const userEvent.setup();
        const button = EventComponent.queryByRole('button');
        await user.click(button);

        expect(button.queryByText('Hide Details')).toBeInTheDocument();
    });
    */

    test('details are hidden once again when user clicks the Hide Details button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Hide Details');
        await user.click(button);

        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

});