import { shallowMount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

import "../../jest.init";

describe("Bilingual.vue", () => {
  it("renders a message in English", () => {
    const wrapper = shallowMount(Bilingual);

    expect(wrapper.text()).toBe("你好，世界");
  });
});