<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import type { Ref } from 'vue';

type SelectValue = null | number;
type SingleOption = {
    label: string,
    value: number
};

const tempTest = reactive({
    select1: null as SelectValue,
    select2: null as SelectValue,
    select3: null as SelectValue,
    select4: null as SelectValue,
})

const {select1, select2, select3, select4} = toRefs(tempTest);

const options: Ref<SingleOption[]> = ref ([
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
