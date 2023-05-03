<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                    { title: 'event 1', date: '2019-04-01' },
                    { title: 'event 2', date: '2019-04-02' }
                ]
            }
        }
    },
    methods: {
        handleDateClick: function (arg) {
            alert('date click! ' + arg.dateStr)
        }
    }
}
</script>
<template>
    <FullCalendar :options="calendarOptions" />
</template>