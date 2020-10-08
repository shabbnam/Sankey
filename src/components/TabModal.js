import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TabContent from "./TabContent";
import AddComponent from "./ActionComponents/AddComponent";
import DeleteComponent from "./ActionComponents/DeleteComponent";
import EditComponent from "./ActionComponents/EditComponent";
import { FormattedMessage } from "react-intl";

export default function VerticalTabs() {
  const content = {
    add: {
      icon: <AddIcon />,
      index: 0,
      label: <FormattedMessage id="Add" defaultMessage="Add" />,
      component: <AddComponent />,
    },
    edit: {
      icon: <EditIcon />,
      index: 1,
      label: <FormattedMessage id="Edit" defaultMessage="Edit" />,
      component: <EditComponent />,
    },
    delete: {
      icon: <DeleteIcon />,
      index: 2,
      label:  <FormattedMessage id="Delete" defaultMessage="Delete" />,
      component: <DeleteComponent />,
    },
  };

  return <TabContent {...content} />;
}
