import { Story } from '@storybook/vue3';

import BaseButton from './Button.vue';

import { loadBackgroundControl } from '../../../../.storybook/tools/generic-controls';

export default {
    component: BaseButton,
    title: 'Design System/Atoms/Button',
};

export const Button: Story<typeof BaseButton> = (args) => ({
    components: { BaseButton },
    setup() {
        return { args };
    },
    template:
        '<base-button v-bind="args" :class="args.background + \' py-4 px-12\'">{{ args.label }}</base-button>',
});

Button.args = {
    label: 'Button',
    circular: false,
    flat: false,
};

loadBackgroundControl(Button);
