import { Story } from '@storybook/vue3';

import AvatarComponent from './Avatar.vue';

import avatar from '../../../../.storybook/assets/image/avatar.jpeg';

export default {
    component: AvatarComponent,
    title: 'Design System/Atoms/Avatar',
};

export const Default: Story<typeof AvatarComponent> = (args) => ({
    components: { AvatarComponent },
    setup: () => {
        return { args };
    },
    template:
        '<avatar-component v-bind="args" :class="args.background + \' w-14 h-14\'" />',
});

export const WithPicture: Story<typeof AvatarComponent> = (args) => ({
    components: { AvatarComponent },
    setup: () => {
        return { args };
    },
    template:
        '<avatar-component v-bind="args" :class="args.background + \' w-14 h-14\'" />',
});

WithPicture.args = {
    image: avatar,
};
