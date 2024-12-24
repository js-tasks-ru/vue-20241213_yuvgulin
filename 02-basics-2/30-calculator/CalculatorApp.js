import {defineComponent, ref, computed} from 'vue'

export default defineComponent({
    name: 'CalculatorApp',

    setup() {
        const value1 = ref(0);
        const value2 = ref(0);
        const operator = ref('sum');

        const result = computed(() => {
            switch (operator.value) {
                case 'sum':
                    return value1.value + value2.value
                case 'subtract':
                    return value1.value - value2.value
                case 'multiply':
                    return value1.value * value2.value
                case 'divide':
                    return value1.value / value2.value
                default:
                    return value1.value + value2.value;
            }
        })

        return {
            value1,
            value2,
            operator,
            result
        }

    },

    template: `
        <div class="calculator">
            <input v-model="value1" type="number" aria-label="First operand"/>

            <div class="calculator__operators">
                <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
                <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
                <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
                <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
            </div>

            <input v-model="value2" type="number" aria-label="Second operand"/>

            <div>=</div>

            <output>{{ result }}</output>
        </div>
    `,
})
