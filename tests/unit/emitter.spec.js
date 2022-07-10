import { shallowMount } from "@vue/test-utils";
import Emitter from "@/components/Emitter.vue";

describe("Emitter.vue", () => {
  it("emits an event with two arguments", () => {
    const wrapper = shallowMount(Emitter);

    wrapper.vm.emitEvent();
    
    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  })

  it("emits an event with one argument by call", () => {
    const events = {};
    const $emit = (event, ...args) => {events[event] = [...args]}

    Emitter.methods.emitEvent.call({$emit});

    expect(events.myEvent).toEqual(["name", "password"]);
  })
})