import React, { useState } from "react";
import { Button } from "antd";
import Drawer from "./drawer";

const App = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} data-testid="open-button">
        Open
      </Button>
      <Button type="primary" onClick={onClose} data-testid="close-button">
        close
      </Button>
      <Drawer opened={open} onClose={onClose}></Drawer>
    </>
  );
};

export default App;
