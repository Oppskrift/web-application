<template>
    <base-button class="py-4 px-6 flex items-center text-left">
        <i
            class="mr-4 rounded-full p-4 w-14 h-14 flex justify-center items-center"
            :class="avatarDynamicClasses"
            :style="avatarStyle"
            >{{ avatarText }}</i
        >

        <div>
            <p class="font-bold">{{ fullName }}</p>
            <p class="text-xs text-medium">{{ recipesNumberText }}</p>
        </div>
    </base-button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import BaseButton from '../../atoms/Button';

export default defineComponent({
    name: 'ProfileButton',
    components: { BaseButton },
    props: {
        avatar: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
        },
        recipesNumber: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const recipesNumberText = computed(() => {
            let prefix = props.recipesNumber;
            let suffix = 'recette publiée';

            if (props.recipesNumber > 1) {
                suffix = 'recettes publiées';
            }

            if (props.recipesNumber < 0) {
                prefix = 0;
            }

            return `${prefix} ${suffix}`;
        });

        const avatarStyle = computed(() => ({
            'background-image': `url("${props.avatar}")`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
        }));

        const avatarDynamicClasses = computed(() => ({
            'bg-primary': !props.avatar,
            'material-icons': !props.avatar,
        }));

        const avatarText = computed(() => (!props.avatar ? 'person' : ''));

        return {
            recipesNumberText,
            avatarStyle,
            avatarDynamicClasses,
            avatarText,
        };
    },
});
</script>
