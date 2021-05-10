<template>
    <base-button class="py-4 px-6 flex items-center text-left">
        <avatar class="w-14 h-14" :image="avatar" />

        <div>
            <p class="font-bold">{{ user }}</p>
            <p class="text-xs text-medium">{{ recipesNumberText }}</p>
        </div>
    </base-button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import BaseButton from '../../atoms/Button';
import Avatar from '../../atoms/Avatar';

export default defineComponent({
    name: 'ProfileButton',
    components: { BaseButton, Avatar },
    props: {
        avatar: {
            type: String,
        },
        user: {
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
            const prefix = props.recipesNumber >= 0 ? props.recipesNumber : 0;
            const suffix =
                props.recipesNumber > 1
                    ? 'recettes publiées'
                    : 'recette publiée';

            return `${prefix} ${suffix}`;
        });

        return {
            recipesNumberText,
        };
    },
});
</script>
