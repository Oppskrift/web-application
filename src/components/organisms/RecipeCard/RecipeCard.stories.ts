import { Story } from '@storybook/vue3';

import RecipeCardComponent from './RecipeCard.vue';

import avatar from '../../../../.storybook/assets/image/avatar.jpeg';
import recipeExample from '../../../../.storybook/assets/image/recipe-example.jpg';

export default {
    component: RecipeCardComponent,
    title: 'Design System/Organisms/Recipe Card',
    decorators: [
        () => ({
            template: '<div style="width: 50%"><story /></div>',
        }),
    ],
};

export const Default: Story<typeof RecipeCardComponent> = (args) => ({
    components: { RecipeCardComponent },
    setup: () => {
        return { args };
    },
    template: '<recipe-card-component v-bind="args" />',
});

Default.args = {
    card: {
        name: 'Vegetables soup with shrimps',
        tags: [
            { label: 'Vegan', color: 'lightGreen' },
            { label: 'Gluten free' },
        ],
        author: { name: 'Scttpr' },
        liked: false,
    },
};

export const WithPicture: Story<typeof RecipeCardComponent> = (args) => ({
    components: { RecipeCardComponent },
    setup: () => {
        return { args };
    },
    template: '<recipe-card-component v-bind="args" />',
});

WithPicture.args = {
    card: {
        name: 'Vegetables soup with shrimps',
        cover: recipeExample,
        tags: [
            { label: 'Vegan', color: 'lightGreen' },
            { label: 'Gluten free' },
        ],
        author: { name: 'Scttpr', avatar },
        liked: false,
    },
};
