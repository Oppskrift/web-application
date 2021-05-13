import { Story } from '@storybook/vue3';

import ModalComponent from './Modal.vue';

export default {
    component: ModalComponent,
    title: 'Design System/Atoms/Modal',
};

export const Default: Story<typeof ModalComponent> = (args) => ({
    components: { ModalComponent },
    setup() {
        return { args };
    },
    template: '<modal-component v-bind="args" />',
});

Default.args = {
    visible: true,
};

export const WithContent: Story<typeof ModalComponent> = (args) => ({
    components: { ModalComponent },
    setup() {
        return { args };
    },
    template:
        '<modal-component v-bind="args">This is some dummy modal content for the story</modal-component>',
});

WithContent.args = {
    visible: true,
};

export const WithHeader: Story<typeof ModalComponent> = (args) => ({
    components: { ModalComponent },
    setup() {
        return { args };
    },
    template:
        '<modal-component v-bind="args">' +
        'This is some dummy modal content for the story, is it good to have a max width ?' +
        '</modal-component>',
});

WithHeader.args = {
    visible: true,
    title: 'Some dummy title',
};
