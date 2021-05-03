import { mount } from '@vue/test-utils';

import Button from './Button.vue';

describe('Button', () => {
    test('Should pass this dummy test', () => {
        const wrapper = mount(Button);
        const span = wrapper.find('span');

        expect(span.exists()).toBe(false);
    });
});
