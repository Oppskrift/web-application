import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import Tag from './Tag.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Tag }],
});

describe('Tag', () => {
    test('It should have label set according to label prop', () => {
        const label = 'Vegan';
        const path = '/';

        const wrapper = mount(Tag as any, {
            global: {
                plugins: [router],
            },
            props: {
                label,
                path,
            },
        });

        const link = wrapper.find('a');

        expect(link.text()).toBe(label);
    });

    test('It should have to attribute set according to path prop', () => {
        const label = 'Vegan';
        const path = '/';

        const wrapper = mount(Tag as any, {
            global: {
                plugins: [router],
            },
            props: {
                label,
                path,
            },
        });

        const link = wrapper.find('a');

        expect(link.attributes('href')).toBe(path);
    });

    test('It should have a default background color', async () => {
        const label = 'Vegan';
        const path = '/';
        const defaultColor = 'bg-brown';

        const wrapper = mount(Tag as any, {
            global: {
                plugins: [router],
            },
            propsData: {
                label,
                path,
            },
        });

        const link = wrapper.find('a');

        expect(link.classes()).toContain(defaultColor);

        await wrapper.setProps({ color: 'red' });
        expect(link.classes()).toContain('bg-red');

        await wrapper.setProps({ color: 'some dummy color' });
        expect(link.classes()).toContain(defaultColor);
    });

    test('It should update background color according to prop', () => {
        const label = 'Vegan';
        const path = '/';
        const defaultColor = 'bg-brown';

        const wrapper = mount(Tag as any, {
            global: {
                plugins: [router],
            },
            props: {
                label,
                path,
            },
        });

        const link = wrapper.find('a');

        expect(link.classes()).toContain(defaultColor);
    });
});
