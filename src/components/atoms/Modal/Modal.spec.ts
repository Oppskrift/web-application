import { shallowMount, mount } from '@vue/test-utils';

import Modal from './Modal.vue';
import Button from '../Button';

describe('Default modal', () => {
    test('It should not be visible by default', () => {
        const wrapper = shallowMount(Modal);

        const modal = wrapper.find('div');

        expect(modal.classes()).toContain('opacity-0');
        expect(modal.classes()).not.toContain('opacity-100');
    });

    test('It should be visible if visible prop is true', () => {
        const wrapper = shallowMount(Modal as any, {
            props: {
                visible: true,
            },
        });

        const modal = wrapper.find('div');

        expect(modal.classes()).toContain('opacity-100');
        expect(modal.classes()).toContain('bg-light');
        expect(modal.classes()).not.toContain('opacity-0');
    });

    test('It should not have a title by default', () => {
        const wrapper = shallowMount(Modal);

        const modalTitle = wrapper.find('h4');

        expect(modalTitle.exists()).toBe(false);
    });

    test('It should have a title if title is set in props', () => {
        const title = 'some dummy title';

        const wrapper = shallowMount(Modal as any, {
            props: { title },
        });

        const modalTitle = wrapper.find('h4');

        expect(modalTitle.text()).toBe(title);
    });

    test('It should have a default footer', () => {
        const wrapper = mount(Modal);

        const footerButtons = wrapper.findAllComponents(Button);

        expect(footerButtons).toHaveLength(2);
    });

    test('Footer should be overridable with slot', () => {
        const wrapper = mount(Modal as any, {
            slots: {
                footer: 'Some summy text',
            },
        });

        const footerButtons = wrapper.findAllComponents(Button);
        const footerSlot = wrapper.find('.mt-8');

        expect(footerButtons).toHaveLength(0);
        expect(footerSlot.text()).toBe('Some summy text');
    });
});
