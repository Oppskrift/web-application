import { Story } from '@storybook/vue3';

import PButton from './ProfileButton.vue';

import { loadBackgroundControl } from '../../../../.storybook/tools/generic-controls';
import avatar from '../../../../.storybook/assets/image/avatar.jpeg';

export default {
    component: PButton,
    title: 'Design System/Molecules/Profile Button',
};

export const Default: Story<typeof PButton> = (args) => ({
    components: { PButton },
    setup: () => {
        return { args };
    },
    template: '<p-button v-bind="args" :class="args.background" />',
});

Default.args = {
    user: 'Scttpr',
};

loadBackgroundControl(Default);

export const WithPicture: Story<typeof PButton> = (args) => ({
    components: { PButton },
    setup: () => {
        return { args };
    },
    template: '<p-button v-bind="args" :class="args.background" />',
});

WithPicture.args = {
    user: 'Scttpr',
    avatar,
};

loadBackgroundControl(WithPicture);
