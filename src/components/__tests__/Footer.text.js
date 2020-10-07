import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("Footer", () => {
  const wrapper = shallow(<Footer>Centime Pvt Ltd</Footer>);

  it("should show footer", () => {
    const text = wrapper.find("footer");
    expect(text.text()).toBe("Centime Pvt Ltd");
  });
});
