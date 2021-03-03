import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

export default tsx.componentFactory.create({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render(): VNode {
    return <h1>{this.msg}</h1>;
  },
});
