import { Story } from '@storybook/vue3';

import IngredientComponent from './Ingredient.vue';

import butternut from '../../../../.storybook/assets/image/butternut.png';

export default {
    component: IngredientComponent,
    title: 'Design System/Molecules/Ingredient',
};

export const Default: Story<typeof IngredientComponent> = (args) => ({
    components: { IngredientComponent },
    setup: () => {
        return { args };
    },
    template:
        '<ingredient-component :name="args.name" :quantity="args.quantity" />',
});

Default.args = {
    name: 'Butternut',
    quantity: { value: 1, unit: 'kg' },
};

export const WithPicture: Story<typeof IngredientComponent> = (args) => ({
    components: { IngredientComponent },
    setup: () => {
        return { args };
    },
    template:
        '<ingredient-component :name="args.name" :quantity="args.quantity" :image="args.image" />',
});

WithPicture.args = {
    name: 'Butternut',
    quantity: { value: 1, unit: 'kg' },
    image: {
        path: butternut,
        alternativeText: 'butternut-picture',
    },
};
