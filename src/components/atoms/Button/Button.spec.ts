import { mount } from '@vue/test-utils';

import Button from './Button.vue';

describe('Button', () => {
    test('It has a default border-radius', () => {
        const wrapper = mount(Button);
        const button = wrapper.find('button');

        expect(button.classes()).toContain('rounded');
    });

    test('It has a full rounded border-radius if circular props is set to true', async () => {
        const wrapper = mount(Button);
        await wrapper.setProps({ circular: true });

        const button = wrapper.find('button');

        expect(button.classes()).toContain('rounded-full');
    });

    test('It has a default box-shadow', () => {
        const wrapper = mount(Button);
        const button = wrapper.find('button');

        expect(button.classes()).toContain('shadow-default');
    });

    test('It is possible to disable box-shadow with flat props', async () => {
        const wrapper = mount(Button);
        await wrapper.setProps({ flat: true });

        const button = wrapper.find('button');

        expect(button.classes()).not.toContain('shadow-default');
    });
});
