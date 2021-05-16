import { Story } from '@storybook/vue3';

import TagComponent from './Tag.vue';

import { loadTagColors } from '../../../../.storybook/tools/generic-controls';

export default {
    component: TagComponent,
    title: 'Design System/Atoms/Tag',
};

export const Tag: Story<typeof TagComponent> = (args) => ({
    components: { TagComponent },
    setup() {
        return { args };
    },
    template: '<tag-component v-bind="args" />',
});

Tag.args = {
    label: 'Vegan',
    path: '#',
};

loadTagColors(Tag);
