import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WeatherCardAlert',

    props: {
        alert: {
            type: Object,
            require: true
        }
    },

    template: `
        <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ alert.sender_name }}:
                {{ alert.description }}</span>
        </div>
    `,
})
