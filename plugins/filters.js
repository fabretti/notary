import moment from 'moment'
import Vue from 'vue'

Vue.filter('dateFormat', (t, f='YYYY-MM-DD HH:mm') => moment.unix(t).format(f))