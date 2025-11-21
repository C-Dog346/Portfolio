import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "./ContactForm.vue";

// Mock emailjs before importing the component
vi.mock("@emailjs/browser", () => ({
  default: { sendForm: vi.fn() }
}));

import emailjs from "@emailjs/browser";

describe("ContactForm", () => {
  it("renders with correct initial state", () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find("input[type='text']").exists()).toBe(true);
    expect(wrapper.find("input[type='email']").exists()).toBe(true);
    expect(wrapper.find("textarea").exists()).toBe(true);

    expect(
      (wrapper.find("input[type='text']").element as HTMLInputElement).value
    ).toBe("");
    expect(
      (wrapper.find("input[type='email']").element as HTMLInputElement).value
    ).toBe("");
    expect(wrapper.find("textarea").element.value).toBe("");
  });

  it("renders success message for valid input", async () => {
    (emailjs as any).sendForm.mockResolvedValueOnce({});

    const wrapper = mount(ContactForm);

    await wrapper.find("input[type='text']").setValue("John Doe");
    await wrapper.find("input[type='email']").setValue("john@example.com");
    await wrapper.find("textarea").setValue("Hello!");

    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(wrapper.find(".status-message.success").exists()).toBe(true);
    expect(wrapper.find(".status-message").text()).toContain(
      "Your message has been sent!"
    );
  });

  it("shows error message when email sending fails", async () => {
    (emailjs as any).sendForm.mockRejectedValueOnce(new Error("Network error"));

    const wrapper = mount(ContactForm);

    await wrapper.find("input[type='text']").setValue("John Doe");
    await wrapper.find("input[type='email']").setValue("john@example.com");
    await wrapper.find("textarea").setValue("Hello!");

    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(wrapper.find(".status-message.error").exists()).toBe(true);
    expect(wrapper.find(".status-message").text()).toContain(
      "There was an error sending your message"
    );
  });

  it("clears after successful submission", async () => {
    (emailjs as any).sendForm.mockResolvedValueOnce({});

    const wrapper = mount(ContactForm);

    await wrapper.find("input[type='text']").setValue("John Doe");
    await wrapper.find("input[type='email']").setValue("john@example.com");
    await wrapper.find("textarea").setValue("Hello!");

    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(
      (wrapper.find("input[type='text']").element as HTMLInputElement).value
    ).toBe("");
    expect(
      (wrapper.find("input[type='email']").element as HTMLInputElement).value
    ).toBe("");
    expect(wrapper.find("textarea").element.value).toBe("");
  });
});
