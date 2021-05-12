import { mount } from '@vue/test-utils';

import ProfileButton from './ProfileButton.vue';

describe('Profile Button', () => {
    test('It should display a p element according to the name props', async () => {
        const user = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { user },
        });

        const pElement = wrapper.find('p');

        expect(pElement.text()).toBe(user);
    });

    test('It should display default recipe number text', () => {
        const user = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { user },
        });

        const pElement = wrapper.find('p.text-xs');

        const defaultText = '0 recette publiée';

        expect(pElement.text()).toBe(defaultText);
    });

    test('It should display default text if recipes number is negative', () => {
        const user = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { user, recipesNumber: -10 },
        });

        const pElement = wrapper.find('p.text-xs');

        const defaultText = '0 recette publiée';

        expect(pElement.text()).toBe(defaultText);
    });

    test('It should display singular if recipes number is equal to one', () => {
        const user = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { user, recipesNumber: 1 },
        });

        const pElement = wrapper.find('p.text-xs');

        const text = '1 recette publiée';

        expect(pElement.text()).toBe(text);
    });

    test('It should display plural if recipes number is greater than one', async () => {
        const user = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { user, recipesNumber: 2 },
        });

        const pElement = wrapper.find('p.text-xs');

        const firstText = '2 recettes publiées';
        expect(pElement.text()).toBe(firstText);

        await wrapper.setProps({ recipesNumber: 10 });

        const secondText = '10 recettes publiées';
        expect(pElement.text()).toBe(secondText);
    });
});
