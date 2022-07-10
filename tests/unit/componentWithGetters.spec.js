import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils"
import ComponentWithGetters from '@/components/componentWithGetters';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firstName: "Alice",
    lastName: "Doe"
  },

  getters: {
    fullname: (state) => state.firstName + " " + state.lastName
  }
})

describe("ComponentWithGetters.vue", () => {
  it("renders a username using a real Vuex getter", () => {
    const wrapper = shallowMount(ComponentWithGetters, { store, localVue })
  
    expect(wrapper.find(".fullname").text()).toBe("Alice Doe")
  })

  it("renders a username using a mock Vuex getter", () => {
    const wrapper = shallowMount(ComponentWithGetters, {
      mocks: {
        $store: {
          getters: {
            fullname: "Bob Doe"
          }
        }
      }
    })

    expect(wrapper.find(".fullname").text()).toBe("Bob Doe")
  })

  it("renders a username using computed mounting options", () => {
    const wrapper = shallowMount(ComponentWithGetters, {
      computed: {
        fullname: () => "Bob Doe"
      }
    })

    expect(wrapper.find(".fullname").text()).toBe("Bob Doe")
  })
})