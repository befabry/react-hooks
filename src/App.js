import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end javascript framework",
  },
  {
    title: "What use React ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "Color Red", value: "red" },
  { label: "Color Green", value: "green" },
  { label: "Shade of Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <React.Fragment>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </React.Fragment>
  );
};
