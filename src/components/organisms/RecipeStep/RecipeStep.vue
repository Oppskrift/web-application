<template>
    <article
        class="shadow-default rounded-md p-2 pl-12 relative"
        :class="doneCardClass"
    >
        <input class="absolute top-3 left-4" type="checkbox" :checked="done" />
        <h4 class="font-bold" :class="lineThroughClass">
            Step {{ stepIndex }}
        </h4>

        <p :class="lineThroughClass">{{ description }}</p>

        <div class="flex flex-wrap items-center">
            <ingredient
                :key="`ingredient-${name}${index}`"
                v-for="({ name, quantity, image }, index) in ingredients"
                :name="name"
                :quantity="quantity"
                :image="image"
                class="my-4 mr-4 no-underline"
            />
        </div>
    </article>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import Ingredient from '../../molecules/Ingredient';

import { Ingredient as IIngredient } from '../../../types';

export default defineComponent({
    name: 'RecipeStep',
    components: { Ingredient },
    props: {
        stepIndex: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
        ingredients: {
            type: Array as PropType<IIngredient[]>,
            default: () => [],
        },
    },
    setup(props) {
        const doneCardClass = computed(() => {
            return {
                'text-done-grey': props.done,
            };
        });

        const lineThroughClass = computed(() => {
            return {
                'line-through': props.done,
            };
        });

        return { doneCardClass, lineThroughClass };
    },
});
</script>
