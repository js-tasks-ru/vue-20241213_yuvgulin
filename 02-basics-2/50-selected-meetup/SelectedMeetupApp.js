import { defineComponent, ref, onMounted, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
    name: 'SelectedMeetupApp',

    setup() {
        const meetupId = ref(1);
        const currentMeetup = ref(null);

        onMounted(async () => {
            currentMeetup.value = await getMeetup(meetupId.value);

        })

        watch(meetupId, async () => {
            currentMeetup.value = await getMeetup(meetupId.value);
        })


        return {
            getMeetup,
            meetupId,
            currentMeetup
        }
    },

    template: `
        <div class="meetup-selector">
            <div class="meetup-selector__control">
                <button
                    class="button button--secondary"
                    type="button"
                    :disabled="meetupId <= 1"
                    @click="meetupId--"
                >Предыдущий</button>

                <div class="radio-group" role="radiogroup">
                    <div class="radio-group__button">
                        <input
                            v-model.number="meetupId"
                            id="meetup-id-1"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            value="1"
                        />
                        <label for="meetup-id-1" class="radio-group__label">1</label>
                    </div>
                    <div class="radio-group__button">
                        <input
                            v-model.number="meetupId"
                            id="meetup-id-2"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            value="2"
                        />
                        <label for="meetup-id-2" class="radio-group__label">2</label>
                    </div>
                    <div class="radio-group__button">
                        <input
                            v-model.number="meetupId"
                            id="meetup-id-3"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            value="3"
                        />
                        <label for="meetup-id-3" class="radio-group__label">3</label>
                    </div>
                    <div class="radio-group__button">
                        <input
                            v-model.number="meetupId"
                            id="meetup-id-4"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            value="4"
                        />
                        <label for="meetup-id-4" class="radio-group__label">4</label>
                    </div>
                    <div class="radio-group__button">
                        <input
                            v-model.number="meetupId"
                            id="meetup-id-5"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            value="5"
                        />
                        <label for="meetup-id-5" class="radio-group__label">5</label>
                    </div>
                </div>

                <button
                    class="button button--secondary"
                    type="button"
                    :disabled="meetupId >= 5"
                    @click="meetupId++"
                >Следующий</button>
            </div>

            <div class="meetup-selector__cover">
                <div class="meetup-cover">
                    <h1 v-if="currentMeetup" class="meetup-cover__title">{{ currentMeetup.title }}</h1>
                    <h1 v-else class="meetup-cover__title">Загрузка</h1>
                </div>
            </div>
            {{ currentMeetup }}
        </div>
    `,
})
