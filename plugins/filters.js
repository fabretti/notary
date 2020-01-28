import moment from 'moment'
import Vue from 'vue'

moment.locale('RU')

Vue.filter('toUpperCaseFirst', i => i.length ? i[0].toUpperCase() + i.slice(1) : i)
Vue.filter('dateTimeFormat', (t, f = 'YYYY-MM-DD HH:mm') => moment.unix(t).format(f))
Vue.filter('timeFormat', (t, f = 'HH:mm') => moment.unix(t).format(f))
Vue.filter('dateFormat', (t, f = 'YYYY-MM-DD') => moment.unix(t).format(f))
Vue.filter('calendarFormat', t => moment.unix(t).calendar())
Vue.filter('weekFormat', (t, f = 'ddd, DD') => moment.unix(t).format(f))
