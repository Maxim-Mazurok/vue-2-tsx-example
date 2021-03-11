import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld";

describe("componentFactory", () => {
  describe("create", () => {
    it("simple component", () => {
      const w = mount(HelloWorld, { propsData: { msg: "Will Receive" } });
      expect(w.html()).toBe("<h1>Will Expect</h1>");
    });
  });
});
