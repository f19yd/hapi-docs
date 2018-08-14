import Vue from 'vue'
import store from '@/js/store'
import App from '@/js/layouts/App'
import '@/js/components'
import '@/js/plugins/progressbar'

Vue.config.productionTip = false

Vue.filter('capitalize', value => {
    const string = value.toString()

    return string.charAt(0).toUpperCase() + string.slice(1)
})

new Vue({
    store,
    ...App
})
