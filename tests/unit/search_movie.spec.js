import { flushPromises, mount } from "@vue/test-utils";
import router from "@/router";
import App from '../../src/App.vue'
import store from '../../src/store/index.js'

describe('Header', () => {
    test('Búsqueda de una película', async () => {
        router.push('/')
        await router.isReady()

        const wrapper = mount(App, {
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.find('.input-search').exists()).toBe(true)
        wrapper.find('.input-search').trigger('focus')
        wrapper.find('.input-search').setValue('Spider')
        expect(wrapper.find('.input-search').element.value).toBe('Spider')
        wrapper.find('.input-search').trigger('keydown.enter')
        await flushPromises()
        expect(wrapper.find('.catalogo-container').exists()).toBe(true)
        wrapper.find('.btn-outline-primary').trigger('click')
        await flushPromises()
    } )
})