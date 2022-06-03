import App from "./App.vue";
import UI from "./components/register.vite";

Vue.use(UI)

new Vue({
  el: "#app",
  vuetify: new Vuetify({
  theme: {
      themes: {
        light: {
          primary: '#6EEB83',
          secondary: '#00504A',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  }
  ),
  render: (h) => h(App),
});
