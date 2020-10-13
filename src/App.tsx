import HelloWorld from './components/HelloWorld';
import { defineComponent } from 'vue';

import Logo from './assets/logo.png';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={Logo} />
        <HelloWorld msg="msg"></HelloWorld>
      </>
    );
  },
});
