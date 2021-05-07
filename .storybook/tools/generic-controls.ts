import { Story } from "@storybook/vue3";

const TAG_COLORS = {
    purple: 'purple',
    'light-green': 'lightGreen',
    'dark-green': 'darkGreen',
    red: 'red',
    default: 'default'
};

export const loadTagColors = <T>(story: Story<T>) => {
    story.argTypes = {
        color: {
            options: Object.values(TAG_COLORS),
            control: {
                type: 'select',
                labels: {
                    [TAG_COLORS.purple]: 'Purple',
                    [TAG_COLORS.red]: 'Red',
                    [TAG_COLORS['light-green']]: 'Light green',
                    [TAG_COLORS['dark-green']]: 'Dark green',
                    default: 'Brown',
                },
            },
        },
    };
}
