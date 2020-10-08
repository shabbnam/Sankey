import React from "react";
import "../styles.css";

function Footer(props) {
  return <footer>{props.children}</footer>;
}

export default React.memo(Footer);
