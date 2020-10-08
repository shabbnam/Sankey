import React from "react";
import { FormattedMessage } from "react-intl";

function NavBar() {
  return (
    <header>
      <img src="/images/centime.png" alt="centime logo" />
      <FormattedMessage id="NavBar.header" defaultMessage="Centime" />
    </header>
  );
}

export default NavBar;
