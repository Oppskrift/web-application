<template>
    <button :class="classNames" type="button">
        <slot />
    </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'BaseButton',
    props: {
        circular: {
            type: Boolean,
            default: false,
        },
        flat: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const classNames = computed(() => {
            let list = 'font-body';

            if (props.circular) {
                list += ' rounded-full';
            } else {
                list += ' rounded';
            }

            if (!props.flat) {
                list += ' shadow-default';
            }

            return list;
        });

        return { classNames };
    },
});
</script>
