import HelloWorld from './components/HelloWorld';
import Logo from './assets/logo.png';
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    return () => (
      <>
        <img src={Logo} alt="" />
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    );
  },
});
