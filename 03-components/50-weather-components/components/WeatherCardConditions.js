import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '../weather.service.ts'

function getIconByConditionId(id) {
    return WeatherConditionIcons[parseInt(id)] || '';
}

function kelvinToCelsius(tempK) {
    return (tempK - 273.15).toFixed(1);
}


export default defineComponent({
    name: 'WeatherCardConditions',

    props: {
        id: {
            type: Number,
            require: true
        },

        temp: {
            type: Number,
            require: true
        },

        title: {
            type: String,
            default: ''
        },
    },

    setup() {
        return {
            getIconByConditionId,
            kelvinToCelsius
        }
    },

    template: `
        <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="title">
                {{ getIconByConditionId(id) }}
            </div>
            <div class="weather-conditions__temp">{{ kelvinToCelsius(temp) }} °C</div>
        </div>
    `,
})
