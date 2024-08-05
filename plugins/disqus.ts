import Vue from 'vue'
import VueDisqus from 'vue-disqus'

export default defineNuxtPlugin(nuxtApp => {
    if (import.meta.client) {
        nuxtApp.vueApp.use(VueDisqus, {
            shortname: 'forelse-fr'
        })
    }
})
