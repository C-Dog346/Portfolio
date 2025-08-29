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
    expect(wrapper.find("button").attributes("type")).toBe("button"); // Default type
    expect(wrapper.text()).toContain(slotContent); // Slot content appears
    expect(wrapper.find("button").classes()).toContain("common-button"); // Has CSS class
  });
});
