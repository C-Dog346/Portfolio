import { describe, expect, it } from "vitest";
import ProjectExample from "./ProjectExample.vue";
import { mount } from "@vue/test-utils";

describe("ProjectExample", () => {
  it("renders elements correctly", () => {
    const wrapper = mount(ProjectExample, {
      props: {
        name: "Project Title",
        image: "project-image.jpg",
        description: "This is a sample project description.",
        github: "https://github.com/example/project"
      }
    });

    expect(wrapper.attributes("class")).includes("project-card");
    expect(wrapper.find("h2").text()).toBe("Project Title");
    expect(wrapper.find("img").attributes("src")).toBe("project-image.jpg");
    expect(wrapper.find("p").text()).toBe(
      "This is a sample project description."
    );
    expect(wrapper.find("a").attributes("href")).toBe(
      "https://github.com/example/project"
    );
  });
});
