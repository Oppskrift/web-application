import { mount } from '@vue/test-utils';

import HomePage from './index.vue';

describe('Home page', () => {
    test('It should pass this dummy test', async () => {
        const wrapper = mount(HomePage);

        const button = wrapper.find('main');

        expect(button.exists()).toBe(true);
    });
});
