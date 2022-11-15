import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import moment from 'moment'
import VueApexCharts from "vue3-apexcharts";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Ecormmerce Store';

const toastOptions = {
    // set toast options here
}
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Toast, toastOptions)
            .use(VueApexCharts)
            .use(VueSweetalert2)

            app.config.globalProperties.$filters = {
                str_pad(v) {
                    if (!v) return ''
                    v = v.toString().padStart(8, "0")
                    return v
                },
                formatPrice(v) {
                    let val = (v / 1).toFixed(2).replace(',', '.')
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                },
                formatCoin(v) {
                    let val = (v / 1).toFixed(8).replace(',', '.')
                    return val.toString()
                },
                capitalize(v) {
                    if (!v) return ''
                    let value = v.toString()
                    return value.charAt(0).toUpperCase() + value.slice(1)
                },
                formatDate(v) {
                    return moment(v).format('MMMM Do, YYYY')
                }
            }

            app.mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });