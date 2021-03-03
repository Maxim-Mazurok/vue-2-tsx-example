import tsx from "vue-tsx-support";
import HelloWorld from "./components/HelloWorld";

export default tsx.component({
  name: "App",
  render: () => <HelloWorld msg={"123"} />,
});
