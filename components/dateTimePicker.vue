<template>
<div class="card-right">
    <div v-if="false" class="slider-month">
        <carousel
            :paginationEnabled="false"
            :navigationEnabled="true"
            :perPage="1"
            navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
            navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
            >
            <slide 
                v-for="(monthName, key) in months"
                :key="key"
            >
                <div @click="month = key">{{ monthName }}</div>
            </slide>
        </carousel>
        
    </div>
    <div 
        v-if="days.length > 0"
        class="slider-days"
        >
        <carousel
            :paginationEnabled="false"
            :navigationEnabled="true"
            :perPageCustom="[[400, 5], [500, 6], [590, 6.5], [780, 3.5], [1011, 4.5]]"
            navigationNextLabel="<i class='material-icons'><img src='/Polygon.svg'></i>"
            navigationPrevLabel="<i class='material-icons'><img src='/PolygonL.svg'></i>"
        >
            <slide 
                v-for="(day, key) in days"
                :key="key"
                >
                <div 
                    class="slider-btn btn-day"
                    @click="date = day"
                    :class="{ active: date == day }"
                    >{{ day | weekFormat | toUpperCaseFirst}}</div>
            </slide>
        </carousel>
    </div>
    <div 
        v-else
        class="block-times error"
        >
        <img src="/busy.svg" alt />
        <p>Не настроено расписание</p>
    </div>
    <div class="change_date">
        <button>Расписание на Чт, 26 сен</button>
    </div>
    <div 
        v-if="times.length > 0"
        class="block-times"
        >
        <ul>
            <li v-for="(t, key) in times" :key="key">
                <div class="slider-btn btn-time default" @click="$emit('click', t.date, t.time)">{{ t.timestamp | timeFormat }}</div>
            </li>
        </ul>
    </div>
    <div 
        v-else-if="days.length > 0"
        class="block-times error"
        >
        <img src="/busy.svg" alt />
        <p>Сегодня занято</p>
    </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
    props: {
        week: {type: Array},
        forbiddenTimes: {type: Object},
        selectedDate: {type: Number, default: null},
    },
    data: () => ({
        date: null,
        time: null,
        month: null,
        months: ['Январь', 'Февраль', 'Март']
    }),
    computed: {
        currentMonth() {
            return Number(moment().endOf('month').format('MM'))
        },
        days() {
            let len = 14
            let startDay = this.getNow()
            let days = []
            for (let i = 0; i < len; i++) {
                let d = startDay + i * 86400
                let wsIndex = moment.unix(d).format('e')
                let ws = this.week[wsIndex]

                let hasWork = ws && ws.workStartTime && ws.workEndTime
                if (hasWork) {
                    days.push(d)
                }
            }
            return days
        },
        times() {
            let date = this.date

            if (!date) {
                return []
            }
            let wsIndex = moment.unix(date).format('e')
            let ws = this.week[wsIndex]
            if (!ws) {
                return []
            }
            let forbiddenDay = this.forbiddenTimes[date],
                forbiddenTimes = forbiddenDay ? Object.keys(forbiddenDay).map(i => Number(i)) : [],
                step = 1800,
                startTime = ws.workStartTime,
                endTime = ws.workEndTime,
                breakStartTime = ws.breakStartTime,
                breakEndTime = ws.breakEndTime,
                times = [],
                nowDate = this.getNow(),
                now = moment().unix() - nowDate

            for (let i = startTime; i <= endTime; i += step) {
                if (date == nowDate && i <= now ) {
                    continue
                }
                if ((i < breakStartTime || i >= breakEndTime) && !forbiddenTimes.includes(i)) {
                    times.push({
                        timestamp: i + date,
                        date,
                        time: i,
                    })
                }
            }
            return times
        }
    },
    watch: {
        selectedDate() {
            this.date = this.selectedDate || this.getNow()
        }
    },
    created() {
        this.date = this.selectedDate || this.getNow()
    },
    methods: {
        getNow() {
            return moment(moment().format('YYYY-MM-DD')).unix()
        }
    },
}
</script>