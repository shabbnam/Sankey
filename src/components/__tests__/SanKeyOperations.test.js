import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SankeyOperations from "../SankeyOperations";
import { data } from "../../Api/data";

Enzyme.configure({ adapter: new Adapter() });

describe("SankeyOperations", () => {
  const wrapper = mount(<SankeyOperations />);

  it("should show button", () => {
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper.find("button").text()).toBe("Edit Sankey");
    expect(wrapper.find("#simple-dialog-title").length).toEqual(0);
  });
});
