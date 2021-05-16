<template>
    <div class="text-sm flex items-center">
        <img
            class="w-8 h-8 object-cover mr-4"
            v-if="image.path"
            :src="image.path"
            :alt="image.alternativeText"
        />
        <div>
            <p>
                <strong>{{ displayableQuantity }}</strong>
            </p>
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import { Quantity, Image } from '../../../types';

export default defineComponent({
    name: 'Ingredient',
    props: {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Object as PropType<Quantity>,
            required: true,
        },
        image: {
            type: Object as PropType<Image>,
            default: () => ({}),
        },
    },
    setup(props) {
        const displayableQuantity = computed(
            () => `${props.quantity.value} ${props.quantity.unit}`
        );

        return { displayableQuantity };
    },
});
</script>

<style scoped></style>
