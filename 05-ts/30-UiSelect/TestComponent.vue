<script setup lang="ts">
import { ref } from "vue";

type SelectValue = '' | number;

type SingleOption = {
    label: string,
    value: number
};

const select1 = ref<SelectValue>('')
const select2 = ref<SelectValue>('')
const select3 = ref<SelectValue>('')
const select4 = ref<SelectValue>('')

const options = ref<SingleOption[]>([
    {label: 'one', value: 1},
    {label: 'two', value: 2},
    {label: 'three', value: 3},
    {label: 'four', value: 4},
]);
</script>

<template>
    <select v-model="select1">
        <option v-for="{ label, value } in options" :key="value" :value>
            {{label}}
        </option>
    </select>

    <select v-model="select2">
        <option v-for="{ label, value } in options" :key="value" :value>
            {{label}}
        </option>
    </select>

    <select v-model="select3">
        <option v-for="{ label, value } in options" :key="value" :value>
            {{label}}
        </option>
    </select>

    <select v-model="select4">
        <option v-for="{ label, value } in options" :key="value" :value>
            {{label}}
        </option>
    </select>
</template>

<style scoped>

</style>
