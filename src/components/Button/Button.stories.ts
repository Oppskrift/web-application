import { Story } from '@storybook/vue3';

import OButton from './Button.vue';

export default {
    component: OButton,
    title: 'Components/Button',
};

const Template: Story<typeof OButton> = (args) => ({
    components: { OButton },
    setup() {
        return { args };
    },
    template: '<o-button v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = { primary: true, label: 'Button' };
