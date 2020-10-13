import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props) {
    const count = ref(0);
    const handleClick = () => {
      count.value++;
    };

    return () => {
      return (
        <>
          <h1>{props.msg}</h1>
          <h3>count: {count.value}</h3>
          <button onClick={handleClick}>click me!</button>
        </>
      );
    };
  },
});
