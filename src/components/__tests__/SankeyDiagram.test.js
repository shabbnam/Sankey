import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SankeyDiagram from "../SankeyDiagram";
import { data } from "../../Api/data";

Enzyme.configure({ adapter: new Adapter() });

describe("SankeyDiagram", () => {
  const SankeyProps = {
    id: "sankey",
    dataSource: data,
    sourceField: "source",
    targetField: "target",
    weightField: "amount",
    title: "Company Turn Over for 2020 ",
  };
  const wrapper = shallow(<SankeyDiagram {...SankeyProps}> </SankeyDiagram>);

  it("should show SankeyDiagram", () => {
    expect(wrapper.find("#sankey").length).toEqual(1);
    
  });
});
