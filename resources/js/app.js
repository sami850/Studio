import './bootstrap';
import { createApp, h } from 'vue'
import {ZiggyVue} from '../../vendor/tightenco/ziggy'
import { createInertiaApp ,Head , Link } from '@inertiajs/vue3'
import '../css/app.css'
import Layout from "./Layouts/Layout.vue";

createInertiaApp({
    title : (title) => `maple app ${title}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Head',Head)
            .component('Link',Link)
            .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: '#fff',

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
})
