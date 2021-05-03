<template>
    <button
        class="border-2 border-gray-500 rounded py-2 px-4 uppercase font-bold"
        type="button"
        @click="handleClick"
    >
        My test button <span v-if="xVisible">X</span>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Button',
    setup() {
        const handleClick = ($event: Event) => {
            console.log('click', $event);
        };

        return {
            xVisible: ref(false),
            handleClick,
        };
    },
});
</script>
