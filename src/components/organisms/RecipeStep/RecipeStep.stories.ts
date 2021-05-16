import { Story } from '@storybook/vue3';

import RecipeStepComponent from './RecipeStep.vue';

import butternut from '../../../../.storybook/assets/image/butternut.png';

export default {
    component: RecipeStepComponent,
    title: 'Design System/Organisms/Recipe Step',
    decorators: [
        () => ({
            template: '<div style="width: 50%"><story /></div>',
        }),
    ],
};

export const RecipeStep: Story<typeof RecipeStepComponent> = (args) => ({
    components: { RecipeStepComponent },
    setup: () => {
        return { args };
    },
    template: '<recipe-step-component v-bind="args" />',
});

RecipeStep.args = {
    done: false,
    stepIndex: 1,
    description:
        'Boil water during 5 minutes and add the butternut for 30 minutes',
    ingredients: [
        {
            name: 'Butternut',
            quantity: { value: 1, unit: 'piece' },
            image: { path: butternut, alternativeText: 'butternut' },
        },
        {
            name: 'Water',
            quantity: { value: 1, unit: 'l' },
        },
    ],
};
