import { Story } from '@storybook/vue3';

import IButton from './IconButton.vue';

import { loadBackgroundControl } from '../../../../.storybook/tools/generic-controls';

export default {
    component: IButton,
    title: 'Design System/Molecules/Icon Button',
};

export const IconButton: Story<typeof IButton> = (args) => ({
    components: { IButton },
    setup: () => {
        return { args };
    },
    template: '<i-button v-bind="args" :class="args.background" />',
});

IconButton.args = {
    name: 'face',
    circular: true,
    flat: true,
};

loadBackgroundControl(IconButton);
