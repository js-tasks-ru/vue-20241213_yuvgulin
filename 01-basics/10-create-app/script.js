import { defineComponent, createApp } from 'vue'

const App = defineComponent({
    name: 'App',

    setup() {
        const getDateLocal = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' });

        return {
            getDateLocal
        }
    },

    template: `<div>Сегодня {{ getDateLocal }}</div>`
});

const app = createApp(App);
app.mount('#app');
