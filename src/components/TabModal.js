import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TabContent from "./TabContent";
import { Provider } from "react-redux";
import store from "../store";
import AddComponent from "./ActionComponents/AddComponent";
import DeleteComponent from "./ActionComponents/DeleteComponent";
import EditComponent from "./ActionComponents/EditComponent";

export default function VerticalTabs() {
  //const Icons = [<AddIcon />, <EditIcon />, <DeleteIcon />];

  const content = {
    add: {
      icon: <AddIcon />,
      index: 0,
      label: "Add",
      component: <AddComponent />,
    },
    edit: {
      icon: <EditIcon />,
      index: 1,
      label: "Edit",
      component: <EditComponent />,
    },
    delete: {
      icon: <DeleteIcon />,
      index: 2,
      label: "Delete",
      component: <DeleteComponent />,
    },
  };

  return <TabContent {...content} />;
}
