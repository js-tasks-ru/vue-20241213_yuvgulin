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
                    <div
                        v-for="i in 5"
                        :key="i"
                        class="radio-group__button"
                    >
                        <input
                            v-model.number="meetupId"
                            :id="'meetup-id-' + i"
                            class="radio-group__input"
                            type="radio"
                            name="meetupId"
                            :value="i"
                        />
                        <label :for="'meetup-id-' + i" class="radio-group__label">{{ i }}</label>
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
        </div>
    `,
})
