import { mount } from '@vue/test-utils';

import ProfileButton from './ProfileButton.vue';

describe('Icon Button', () => {
    test('It should display a p element according to the name props', async () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName },
        });

        const pElement = wrapper.find('p');

        expect(pElement.text()).toBe(fullName);
    });

    test('It should display default recipe number text', () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName },
        });

        const pElement = wrapper.find('p.text-xs');

        const defaultText = '0 recette publiée';

        expect(pElement.text()).toBe(defaultText);
    });

    test('It should display default text if recipes number is negative', () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName, recipesNumber: -10 },
        });

        const pElement = wrapper.find('p.text-xs');

        const defaultText = '0 recette publiée';

        expect(pElement.text()).toBe(defaultText);
    });

    test('It should display singular if recipes number is equal to one', () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName, recipesNumber: 1 },
        });

        const pElement = wrapper.find('p.text-xs');

        const text = '1 recette publiée';

        expect(pElement.text()).toBe(text);
    });

    test('It should display plural if recipes number is greater than one', async () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName, recipesNumber: 2 },
        });

        const pElement = wrapper.find('p.text-xs');

        const firstText = '2 recettes publiées';
        expect(pElement.text()).toBe(firstText);

        await wrapper.setProps({ recipesNumber: 10 });

        const secondText = '10 recettes publiées';
        expect(pElement.text()).toBe(secondText);
    });

    test('It should display a person icon if avatar prop is not provided', () => {
        const fullName = 'Scttpr';
        const wrapper = mount(ProfileButton as any, {
            props: { fullName },
        });

        const iElement = wrapper.find('i');

        expect(iElement.text()).toBe('person');
        expect(iElement.classes()).toContain('material-icons');
        expect(iElement.classes()).toContain('bg-primary');
    });

    test('It should display the avatar has background if avatar prop is provided', () => {
        const fullName = 'Scttpr';
        const avatar = 'some-dummy-path.jpeg';
        const wrapper = mount(ProfileButton as any, {
            propsData: { fullName, avatar },
        });

        const iElement = wrapper.find('i');

        const mockedStyle =
            'background-image: url(some-dummy-path.jpeg); background-position: center; background-repeat: no-repeat; background-size: cover;';

        expect(iElement.classes()).not.toContain('material-icons');
        expect(iElement.classes()).not.toContain('bg-primary');
        expect(iElement.attributes('style')).toBe(mockedStyle);
    });
});
