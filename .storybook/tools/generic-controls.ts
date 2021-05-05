import { Story } from "@storybook/vue3";

const BACKGROUNDS = {
    primary: 'bg-primary',
    light: 'bg-light',
    white: 'bg-white',
    transparent: 'bg-transparent'
};

export const loadBackgroundControl = <T>(story: Story<T>) => {
    story.argTypes = {
        background: {
            options: Object.values(BACKGROUNDS),
            control: {
                type: 'radio',
                labels: {
                    [BACKGROUNDS.primary]: 'Primary',
                    [BACKGROUNDS.light]: 'Light',
                    [BACKGROUNDS.white]: 'White',
                    [BACKGROUNDS.transparent]: 'Transparent',

                },
            },
        },
    };
}