import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import ComponentWithVuex from "@/components/ComponentWithVuex.vue"

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: "alice"
  }
})

describe("ComponentWithVuex.vue", () => {
  it("renders a username using a real Vuex store", () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      localVue,
      store
    });

    expect(wrapper.find(".username").text()).toBe("alice")
  })

  it("renders a username using a mock Vuex store", () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: {
            username: "bob"
          }
        }
      }
    });

    expect(wrapper.find(".username").text()).toBe("bob")
  })
})