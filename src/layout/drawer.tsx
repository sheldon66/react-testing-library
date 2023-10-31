import { Drawer } from "antd";

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
