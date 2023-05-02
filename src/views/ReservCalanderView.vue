<template>
    <div>
        <FullCalendar :events="events" :plugins="[timeGridPlugin]" />
    </div>
</template>
  
<script>
// import { createApp } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
    data() {
        return {
            events: [
                // your event data here
            ]
        };
    },
    components: {
        FullCalendar
    },

    setup() {
        return {
            calendarOptions: {
                plugins: [timeGridPlugin],
                initialView: 'timeGridWeek'
            }
        }
    }
};
</script>
  