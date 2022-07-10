import { mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import NestedRoute from "@/components/NestedRoute.vue"
import routes from "@/router/routes.js"

jest.mock("@/components/NestedRoute.vue", () => ({
  name: "NestedRoute",
  render: h => h("div")
}))

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push("/nested-route");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(NestedRoute).exists()).toBe(true);
  })
})