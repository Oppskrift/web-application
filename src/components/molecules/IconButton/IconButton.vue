<template>
    <base-button :circular="circular" :flat="flat">
        <i class="material-icons px-4 py-4 r">{{ name }}</i>
    </base-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BaseButton from '../../atoms/Button';

export default defineComponent({
    name: 'IconButton',
    components: { BaseButton },
    props: {
        name: {
            type: String,
            required: true,
        },
        circular: {
            type: Boolean,
            default: false,
        },
        flat: {
            type: Boolean,
            default: false,
        },
    },
});
</script>
