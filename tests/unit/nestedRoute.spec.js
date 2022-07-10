import { shallowMount } from "@vue/test-utils"
import NestedRoute from "@/components/NestedRoute.vue"
import mockModule from "@/router/bust-cache.js";

jest.mock("@/router/bust-cache.js", () => ({
  bustCache: jest.fn()
}));

describe("NestedRoute.vue", () => {
  it("renders a username from query string", () => {
    const username = "alice";
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });

    expect(wrapper.find(".username").text()).toBe(username);
  })

  it("calls bustCache and next when leaving the route", async () => {
    const username = "alice";
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });
    const next = jest.fn();
    NestedRoute.beforeRouteLeave.call(wrapper.vm, {}, {}, next);

    await wrapper.vm.$nextTick();

    expect(mockModule.bustCache).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  })
})