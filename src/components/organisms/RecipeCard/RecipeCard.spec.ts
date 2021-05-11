import { shallowMount } from '@vue/test-utils';

import RecipeCard from './RecipeCard.vue';

describe('Icon Button', () => {
    const dummyCard = {
        name: 'Vegetables soup with shrimps',
        tags: [
            { label: 'Vegan', color: 'lightGreen', path: '/' },
            { label: 'Gluten free', path: '/' },
        ],
        author: { name: 'Scttpr' },
        liked: false,
    };

    test('It should display a white outlined heart icon if recipe is not liked', async () => {
        const wrapper = shallowMount(RecipeCard as any, {
            props: { card: dummyCard },
        });

        const heartIcon = wrapper.find('i');

        expect(heartIcon.text()).toBe('favorite_border');
        expect(heartIcon.classes()).toContain('text-white');
    });

    test('It should display a red filled heart icon if recipe is liked', async () => {
        const wrapper = shallowMount(RecipeCard as any, {
            props: { card: { ...dummyCard, liked: true } },
        });

        const heartIcon = wrapper.find('i');

        expect(heartIcon.text()).toBe('favorite');
        expect(heartIcon.classes()).toContain('text-red');
    });
});
