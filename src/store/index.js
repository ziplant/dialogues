import { createStore } from "vuex";
import dialogues from "./modules/dialogues";

export default createStore({
  modules: {
    dialogues,
  },
});
