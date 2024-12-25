import {defineComponent, onMounted, onUnmounted, ref} from 'vue'

const INTERVAL = 1000;
export default defineComponent({
    name: 'UiClock',

    setup() {
        const currentTime = ref(null);
        let timer = 0;

        function setCurrentTime() {
            currentTime.value = new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'});
        }

        onMounted(() => {
            timer = setInterval(() => setCurrentTime(), INTERVAL)
            setCurrentTime()
        })

        onUnmounted (() => {
            clearInterval(timer)
        })

        return {
            currentTime
        }
    },

    template: `
        <div class="clock">{{ currentTime }}</div>`,
})
