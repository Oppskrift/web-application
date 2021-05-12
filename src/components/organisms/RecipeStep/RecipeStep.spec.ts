import { shallowMount } from '@vue/test-utils';

import RecipeStep from './RecipeStep.vue';

describe('Icon Button', () => {
    test('It should have a different style depending on the done prop', async () => {
        const wrapper = shallowMount(RecipeStep as any, {
            props: {
                description: 'some dummy description',
                stepIndex: 1,
            },
        });

        const recipeStep = wrapper.find('article');
        const stepTitle = wrapper.find('h4');
        const description = wrapper.find('p');

        expect(recipeStep.classes()).not.toContain('text-done-grey');
        expect(stepTitle.classes()).not.toContain('line-through');
        expect(description.classes()).not.toContain('line-through');

        await wrapper.setProps({ done: true });

        expect(recipeStep.classes()).toContain('text-done-grey');
        expect(stepTitle.classes()).toContain('line-through');
        expect(description.classes()).toContain('line-through');
    });
});
