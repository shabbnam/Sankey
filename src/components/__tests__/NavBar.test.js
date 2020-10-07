import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../NavBar";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
  const wrapper = shallow(<NavBar />);

  it("should show Company Name", () => {
    const text = wrapper.find("header");
    expect(text.text()).toBe("Centime");
  });

  it("should show Company Logo", () => {
    const img = wrapper.find("img");
    expect(wrapper.find("img").length).toEqual(1);
  });
});
