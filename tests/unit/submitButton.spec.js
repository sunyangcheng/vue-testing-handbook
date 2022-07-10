import { shallowMount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

const msg = "Submit";
const factory = (propsData) => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData,
    },
  });
};

describe("SubmitButton.vue", () => {
  it("display a non authorized message", () => {
    const wrapper = factory();
    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe(msg);
  });

  it("display a authorized message", () => {
    const wrapper = factory({ isAdmin: true });
    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe(msg);
  })
});