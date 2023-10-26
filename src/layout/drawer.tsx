import { Drawer } from "antd";
import userEvent from "@testing-library/user-event";
const App = ({ opened, onClose }) => {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        open={opened}
        onClose={onClose}
      >
        <p>hello</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
