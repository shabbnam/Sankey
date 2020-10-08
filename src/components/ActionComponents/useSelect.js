import React from "react";

function useSelect(initialValue) {
  var [Node, setNode] = useState(initialValue);

  var reset = () => setNode(initialValue);

  const bind = {
    Node,
    onChange: (e) =>
      setNode((state) => {
        return { ...state, [e.target.name]: e.target.value };
      }),
  };

  return [value, bind];
}

export default useSelect;
