<template>
    <button :class="classNames" type="button">
        {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        primary: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const classNames = computed(() => {
            const basicClass =
                'py-4 px-12 font-body shadow-oDefault rounded-md';

            if (props.primary) {
                return `${basicClass} bg-oGrey`;
            }
            return `${basicClass} bg-white`;
        });

        return {
            classNames,
        };
    },
});
</script>
