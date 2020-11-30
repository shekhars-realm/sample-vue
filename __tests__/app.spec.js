import { mount } from '@vue/test-utils'
import App from '@/App.vue'
describe('App', () => {
  // Inspect the raw component options
  console.log(App);
  it('has data', () => {
    expect(typeof App.render).toBe('function')
  })
})
