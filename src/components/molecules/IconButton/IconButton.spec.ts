import { mount } from '@vue/test-utils';

import IconButton from './IconButton.vue';

describe('Icon Button', () => {
    test('It should have an i element with name prop as a content', async () => {
        const name = 'menu';

        const wrapper = mount(IconButton as any, {
            propsData: { name },
        });

        const button = wrapper.find('button');

        expect(button.text()).toBe(name);
    });
});
