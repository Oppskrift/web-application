import { mount } from '@vue/test-utils';

import Avatar from './Avatar.vue';

describe('Avatar', () => {
    test('It should display default icon if no image is provided', async () => {
        const wrapper = mount(Avatar);

        const icon = wrapper.find('i');

        expect(icon.text()).toBe('person');
        expect(icon.classes()).toContain('material-icons');
    });

    test('It should not display text and provide a background image if image prop is provided', () => {
        const wrapper = mount(Avatar as any, {
            props: { image: 'some-dummy-path.jpeg' },
        });

        const icon = wrapper.find('i');

        const mockedStyle =
            'background-image: url(some-dummy-path.jpeg); background-position: center; background-repeat: no-repeat; background-size: cover;';

        expect(icon.text()).toBe('');
        expect(icon.classes()).not.toContain('material-icons');
        expect(icon.attributes('style')).toBe(mockedStyle);
    });
});
