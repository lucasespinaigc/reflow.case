import { BellIcon } from '@phosphor-icons/react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';

const Children = () => {
    return <p>Hey! This is the card content.</p>;
};

const meta = {
    title: 'Core/Card',
    component: Card,
    args: {
        children: <Children />,
    },
    argTypes: {
        children: {
            control: false,
        },
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Principal: Story = {
    args: {
        title: 'Card title',
    },
};

export const WithDescription: Story = {
    args: {
        title: 'Card title',
        description: 'This is a description for the card.',
    },
};

export const TitleSm: Story = {
    args: {
        title: 'Card title',
        titleSize: 'sm',
    },
};

export const TitleLg: Story = {
    args: {
        title: 'Card title',
        titleSize: 'lg',
    },
};
