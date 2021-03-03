import tsx from "vue-tsx-support";

export default tsx.component({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render: (...[, ctx]) => <h1>{ctx.props.msg}</h1>,
});
