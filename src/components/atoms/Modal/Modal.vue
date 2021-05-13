<template>
    <div
        class="
            pointer-events-none
            fixed
            w-full
            h-full
            top-0
            left-0
            flex
            items-center
            justify-center
        "
        :class="overlayDynamicClasses"
    >
        <div class="bg-white p-4 rounded-lg max-w-min">
            <h4 v-if="title" class="font-bold text-xl mb-4">{{ title }}</h4>

            <slot />

            <div class="flex justify-center mt-8">
                <slot name="footer">
                    <o-button flat class="mr-4 py-2 px-8 border border-primary">
                        Cancel
                    </o-button>

                    <o-button flat class="bg-primary py-2 px-8">
                        Validate
                    </o-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import OButton from '../Button/Button.vue';

export default defineComponent({
    name: 'Modal',
    components: { OButton },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
        },
    },
    setup(props) {
        const overlayDynamicClasses = computed(() => {
            return {
                'opacity-0': !props.visible,
                'opacity-100': props.visible,
                'bg-light': props.visible,
            };
        });

        return { overlayDynamicClasses };
    },
});
</script>
