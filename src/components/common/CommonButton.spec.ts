import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CommonButton from "./CommonButton.vue";

describe("CommonButton", () => {
  it("renders button with default props and slot content", () => {
    const slotContent = "Click me!";

    const wrapper = mount(CommonButton, {
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").attributes("type")).toBe("button");
    expect(wrapper.text()).toContain(slotContent);
    expect(wrapper.find("button").classes()).toContain("common-button");
  });

  it("renders button with custom type and additional classes", () => {
    const wrapper = mount(CommonButton, {
      props: {
        type: "submit",
        class: "custom-class"
      }
    });

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").attributes("type")).toBe("submit");
    expect(wrapper.find("button").classes()).toContain("custom-class");
  });

  it("renders disabled button", () => {
    const wrapper = mount(CommonButton, {
      props: {
        disabled: true
      }
    });

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBe(true);
  });
});
