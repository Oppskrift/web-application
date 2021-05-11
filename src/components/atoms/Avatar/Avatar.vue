<template>
    <i
        class="rounded-full p-4 flex justify-center items-center"
        :class="avatarDynamicClasses"
        :style="avatarStyle"
    >
        {{ avatarText }}
    </i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'Avatar',
    props: {
        image: {
            type: String,
        },
    },
    setup(props) {
        const avatarStyle = computed<any>(() => ({
            'background-image': `url("${props.image}")`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
        }));

        const avatarDynamicClasses = computed(() => ({
            'bg-primary': !props.image,
            'material-icons': !props.image,
        }));

        const avatarText = computed(() => (!props.image ? 'person' : ''));

        return {
            avatarStyle,
            avatarDynamicClasses,
            avatarText,
        };
    },
});
</script>
