<template>
    <router-link
        :to="path"
        class="text-sm text-white font-bold rounded px-2 py-1"
        :class="backgroundColor"
    >
        {{ label }}
    </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'Tag',
    props: {
        label: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        color: {
            type: String,
        },
    },
    setup(props) {
        const backgroundColor = computed(() => {
            switch (props.color) {
                case 'red':
                    return 'bg-red';
                case 'purple':
                    return 'bg-purple';
                case 'darkGreen':
                    return 'bg-dark-green';
                case 'lightGreen':
                    return 'bg-light-green';
                default:
                    return 'bg-brown';
            }
        });

        return { backgroundColor };
    },
});
</script>
