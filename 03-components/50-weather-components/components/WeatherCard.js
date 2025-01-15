import { defineComponent } from 'vue'
import WeatherCardAlert from "./WeatherCardAlert.js";
import WeatherCardConditions from "./WeatherCardConditions.js";
import WeatherCardDetails from "./WeatherCardDetails.js";


function isDayNow(currientTime, sunriseTime, sunsetTime) {
    return sunriseTime < currientTime && currientTime < sunsetTime;
}

function pressureConvert(pressure) {
    return Math.round(pressure * 0.75 );
}

export default defineComponent({
    name: 'WeatherCard',

    components: {
        WeatherCardAlert,
        WeatherCardConditions,
        WeatherCardDetails
    },

    props: {
        data: {
            type: Object,
            require: true
        }
    },

    setup() {
        return {
            isDayNow,
            pressureConvert
        }
    },

    template: `
        <li :class="{'weather-card--night': !isDayNow(data.current.dt, data.current.sunrise, data.current.sunset)}">
            <WeatherCardAlert v-if="data.alert" :alert="data.alert" />

            <div>
                <h2 class="weather-card__name">
                    {{ data.geographic_name }}
                </h2>
                <div class="weather-card__time">
                    {{ data.current.dt }}
                </div>
            </div>

            <WeatherCardConditions
                :id="data.current.weather.id"
                :temp="data.current.temp"
                :title="data.current.weather.description"
            />

            <WeatherCardDetails
                :clouds="data.current.clouds"
                :humidity="data.current.humidity"
                :pressure="data.current.pressure"
                :wind-speed="data.current.wind_speed"
            />
        </li>
    `,
})
