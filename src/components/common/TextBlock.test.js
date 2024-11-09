import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextBlock from './TextBlock';
import copyIcon from '../../Images/copy.png';

Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn().mockResolvedValue(),
    },
});

test('copies text to clipboard when button is clicked', async () => {
    render(
        <TextBlock
            type="title-with-image"
            className="pickupCodeTitle"
            subClassName="pickupCodeSub"
            title="Pick-up Code"
            subtitle="288-234-123"
            imageSrc={copyIcon}
            altText="copy icon"
        />
    );

    const button = screen.getByAltText('copy icon');
    fireEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('288-234-123');
});
