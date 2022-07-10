import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
import flushPromises from "flush-promises";

let url;
let data;

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
    });
  }
}

describe("FormSubmitter.vue", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      },
    });
    
    wrapper.find("[data-username]").setValue("young");
    wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(wrapper.find(".message").text()).toBe("Thank you for your submission, young.");
    expect(url).toBe("/api/submit");
    expect(data).toEqual({ username: "young" });
  })
});