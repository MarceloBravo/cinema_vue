import { mount } from "@vue/test-utils";
import router from "@/router";
import App from '../../src/App.vue'
import store from '../../src/store/index.js'

describe('Home', () => {
    test('Prueba de ruta Home', async () => {
        router.push('/')
        await router.isReady()

        const wrapper = mount(App, {
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.find('.home').exists()).toBe(true)
    })
})