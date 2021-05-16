import { mount } from '@vue/test-utils';

import Ingredient from './Ingredient.vue';

describe('Ingredient', () => {
    test('It should display ingredient quantity with its value and unit concatenated', async () => {
        const wrapper = mount(Ingredient as any, {
            props: { name: 'Butternut', quantity: { value: 1, unit: 'kg' } },
        });

        const quantity = wrapper.find('strong');

        expect(quantity.text()).toBe('1 kg');

        await wrapper.setProps({ quantity: { value: 2, unit: 'g' } });
        expect(quantity.text()).toBe('2 g');
    });
});
