import {defineComponent} from 'vue'
import {getWeatherData, WeatherConditionIcons} from './weather.service.ts'

function getIconByConditionId(id) {
    return WeatherConditionIcons[parseInt(id)] || '';
}

function timeToSeconds(time) {
    return time.split(':')[0]*60 + time.split(':')[1]*1;
}

function isDayNow(currientTime, sunriseTime, sunsetTime) {
    return timeToSeconds(sunriseTime) < timeToSeconds(currientTime) && timeToSeconds(currientTime) < timeToSeconds(sunsetTime);
}

function kelvinToCelsius(tempK) {
    return (tempK - 273.15).toFixed(1);
}

function pressureConvert(pressure) {
    return Math.round(pressure * 0.75 );
}

export default defineComponent({
    name: 'WeatherApp',

    setup() {
        const weatherData = getWeatherData();

        return {
            weatherData,
            isDayNow,
            getIconByConditionId,
            kelvinToCelsius,
            pressureConvert
        }
    },

    template: `
        <div>
            <h1 class="title">Погода в Средиземье</h1>

            <ul class="weather-list unstyled-list">
                <li
                    v-for="(weatherItem, index) in weatherData"
                    :key="index"
                    class="weather-card"
                    :class="{'weather-card--night': !isDayNow(weatherItem.current.dt, weatherItem.current.sunrise, weatherItem.current.sunset)}"
                >
                    <div v-if="weatherItem.alert" class="weather-alert">
                        <span class="weather-alert__icon">⚠️</span>
                        <span class="weather-alert__description">{{ weatherItem.alert.sender_name }}:
                            {{ weatherItem.alert.description }}</span>
                    </div>
                    <div>
                        <h2 class="weather-card__name">
                            {{ weatherItem.geographic_name }}
                        </h2>
                        <div class="weather-card__time">
                            {{ weatherItem.current.dt }}
                        </div>
                    </div>
                    <div class="weather-conditions">
                        <div class="weather-conditions__icon" :title="weatherItem.current.weather.description">
                            {{ getIconByConditionId(weatherItem.current.weather.id) }}
                        </div>
                        <div class="weather-conditions__temp">{{ kelvinToCelsius(weatherItem.current.temp) }} °C</div>
                    </div>
                    <div class="weather-details">
                        <div class="weather-details__item">
                            <div class="weather-details__item-label">Давление, мм рт. ст.</div>
                            <div class="weather-details__item-value">{{ pressureConvert(weatherItem.current.pressure) }}</div>
                        </div>
                        <div class="weather-details__item">
                            <div class="weather-details__item-label">Влажность, %</div>
                            <div class="weather-details__item-value">{{ weatherItem.current.humidity }}</div>
                        </div>
                        <div class="weather-details__item">
                            <div class="weather-details__item-label">Облачность, %</div>
                            <div class="weather-details__item-value">{{ weatherItem.current.clouds }}</div>
                        </div>
                        <div class="weather-details__item">
                            <div class="weather-details__item-label">Ветер, м/с</div>
                            <div class="weather-details__item-value">{{ weatherItem.current.wind_speed }}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `,
})
