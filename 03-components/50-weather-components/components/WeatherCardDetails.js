import { defineComponent } from 'vue'

function pressureConvert(pressure) {
    return Math.round(pressure * 0.75 );
}

export default defineComponent({
    name: 'WeatherCardDetails',

    props: {
        clouds: {
            type: Number || String,
            default: '--'
        },

        humidity: {
            type: Number || String,
            default: '--'
        },

        pressure: {
            type: Number,
            require: true
        },

        windSpeed: {
            type: Number || String,
            default: '--'
        },
    },

    setup() {
        return {
            pressureConvert
        }
    },

    template: `
        <div class="weather-details">
            <div class="weather-details__item">
                <div class="weather-details__item-label">Давление, мм рт. ст.</div>
                <div class="weather-details__item-value">{{ pressureConvert(pressure) }}</div>
            </div>
            <div class="weather-details__item">
                <div class="weather-details__item-label">Влажность, %</div>
                <div class="weather-details__item-value">{{ humidity }}</div>
            </div>
            <div class="weather-details__item">
                <div class="weather-details__item-label">Облачность, %</div>
                <div class="weather-details__item-value">{{ clouds }}</div>
            </div>
            <div class="weather-details__item">
                <div class="weather-details__item-label">Ветер, м/с</div>
                <div class="weather-details__item-value">{{ windSpeed }}</div>
            </div>
        </div>
    `,
})
