import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ImageCarousel from "./ImageCarousel.vue";
import technologies from "@/lib/data/technologies/technologies.json";

describe("ImageCarousel", () => {
  it("renders with correct number of items", () => {
    const wrapper = mount(ImageCarousel, {
      props: {
        items: technologies
      }
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll("img").length).toBe(technologies.length * 2);
    expect(wrapper.findAll(".carousel-item").length).toBe(
      technologies.length * 2
    );
  });

  it("renders with expected items", () => {
    const wrapper = mount(ImageCarousel, {
      props: {
        items: technologies
      }
    });

    const images = wrapper.findAll("img");

    technologies.forEach((tech, index) => {
      expect(images[index].attributes("src")).toBe(tech.image);
      expect(images[index].attributes("alt")).toBe(tech.name);
    });
  });

  it("handles empty items array", () => {
    const wrapper = mount(ImageCarousel, {
      props: {
        items: []
      }
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll("img").length).toBe(0);
    expect(wrapper.findAll(".carousel-item").length).toBe(0);
  });
});
