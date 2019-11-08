import Vue from 'vue'
import VMaps from 'v-maps'

// { key: string, version?: string, libraries?: Array<string> }
const googleApiOptions = {
  key: 'YOUR_GOOGLE_MAPS_API_KEY'
}
Vue.use(VMaps, googleApiOptions)

