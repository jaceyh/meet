import { render } from '@testing-library/react';
import { debug } from 'jest-preview';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        // setup a DOM element as a render target
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}}/>);
    });

    test('renders text input', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events');
    });

    test('event list shows 32 events by default (default value of the input field is 32', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox.value).toBe("32");
    });

    test('value of the NumberOfEvents textbox has a value that changes accordingly when a user .type()s in it', async () => {
        const user = userEvent.setup();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => {}}/>);

        //user types "100" in textbox
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox, "{backspace}{backspace}100");

        expect(numberTextBox).toHaveValue("100");
    });
});