import { mount, shallowMount } from "@vue/test-utils"; 
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue";
import Child from "@/components/Child.vue";

it("renders many children", () => {
  const wrapper = shallowMount(ParentWithManyChildren)

  expect(wrapper.findAll(Child).length).toBe(3)
})