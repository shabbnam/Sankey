import React from "react";
import Sankey, { Tooltip, Link, Node } from "devextreme-react/sankey";

function SankeyDiagram({
  id,
  dataSource,
  sourceField,
  targetField,
  weightField,
  title,
}) {
  //customize the tooltip
  const customizeLinkTooltip = (info) => {
    console.log(info);
    return {
      html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Amount:</b> ${info.weight}`,
    };
  };
  return (
    <Sankey
      id={id}
      dataSource={dataSource}
      sourceField={sourceField}
      targetField={targetField}
      weightField={weightField}
      title={title}
    >
      <Tooltip
        enabled={true}
        customizeLinkTooltip={customizeLinkTooltip}
      ></Tooltip>

      <Link colorMode="gradient"></Link>
      <Node width={8} padding={30}></Node>
    </Sankey>
  );
}

export default React.memo(SankeyDiagram);
