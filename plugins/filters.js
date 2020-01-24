import moment from 'moment'
import Vue from 'vue'

moment.locale('RU')

Vue.filter('dateTimeFormat', (t, f = 'YYYY-MM-DD HH:mm') => moment.unix(t).format(f))
Vue.filter('dateFormat', (t, f = 'YYYY-MM-DD') => moment.unix(t).format(f))
Vue.filter('calendarFormat', t => moment.unix(t).calendar())
