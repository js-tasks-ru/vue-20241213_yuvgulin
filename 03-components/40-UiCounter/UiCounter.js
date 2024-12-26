import {defineComponent, toRef} from 'vue'
import {UiButton} from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
    name: 'UiCounter',

    components: {
        UiButton,
    },

    props: {
        count: {
            type: Number,
            required: true,
        },

        min: {
            type: Number,
            default: 0
        },

        max: {
            type: Number,
            default: Infinity
        },
    },

    setup(props, { emit }) {
        // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
        const countTemp = toRef(() => props.count);

        function decrementCount() {
            const newValue = countTemp.value - 1;
            emit('update:count', newValue)
        }

        function incrementCount() {
            const newValue = countTemp.value + 1;
            emit('update:count', newValue)
        }

        return {
            countTemp,
            decrementCount,
            incrementCount
        }
    },

    template: `
        <div class="counter">
            <UiButton
                aria-label="Decrement"
                :disabled="countTemp <= min"
                @click="decrementCount"
            >➖</UiButton>
            <span class="count" data-testid="count">{{ countTemp }}</span>
            <UiButton
                aria-label="Increment"
                :disabled="countTemp >= max"
                @click="incrementCount"
            >➕</UiButton>
        </div>
    `,
})
