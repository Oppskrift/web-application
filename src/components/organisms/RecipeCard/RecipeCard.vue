<template>
    <article class="rounded-lg shadow-default relative">
        <i v-if="!isAuthor" class="material-icons absolute top-4 right-4" :class="likeIconColor">{{ likeIconName }}</i>

        <img class="w-full h-56 object-cover rounded-t-lg" v-if="card.cover" :src="card.cover" alt="recipe-cover" />
        <i v-else class="material-icons bg-primary rounded-t-lg w-full h-56 flex justify-center items-center text-white text-8xl">image</i>

        <div class="p-4">
            <tag
                :key="`recipe-tag${index}`"
                v-for="({ label, color }, index) in card.tags"
                :label="label"
                :color="color"
                class="mr-2"
            />
            <p class="font-bold my-2">{{ card.name }}</p>

        <div class="flex items-center">
            <avatar class="h-8 w-8 mr-2" :image="card.author.avatar" />
            <span class="text-sm text-medium-grey">{{ card.author.name }}</span> 
        </div>

        </div>


    </article>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import Tag from '../../atoms/Tag';
import Avatar from '../../atoms/Avatar';

enum TagColor {
    purple = 'purple',
    'light-green' = 'lightGreen',
    'dark-green' = 'darkGreen',
    red = 'red',
    default = 'default'
};

interface Tag {
    label: string;
    color?: TagColor;
}

interface Author {
    name: string;
    avatar?: string;
}

interface RecipeCard {
    name: string;
    tags: Tag[];
    author: Author;
    liked: boolean;
    cover?: string;
}

export default defineComponent({
    name: 'RecipeCard',
    components: { Tag, Avatar },
    props: {
        card: {
            type: Object as PropType<RecipeCard>,
            required: true,
        },
    },
    setup(props) {
        // @todo add computed property when authentication is set
        const isAuthor = computed(() => {
            return false;
        });

        const likeIconName = computed(() => {
            return props.card.liked ? 'favorite' : 'favorite_border';
        });

        const likeIconColor = computed(() => {
            return {
                'text-white': !props.card.liked,
                'text-red': props.card.liked,
            };
        });

        return { isAuthor, likeIconName, likeIconColor };
    }
});
</script>
