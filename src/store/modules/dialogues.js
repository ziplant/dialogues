export default {
  state: {
    dialogues: [
      {
        id: 1,
        subject: "Простой запрос",
        created: "2019-08-01 23:59",
        parts: [
          {
            id: 1,
            author: "vasya",
            text: "Привет, как дела?",
            created: "2019-08-01 23:59",
          },
          {
            id: 2,
            author: "petya",
            created: "2019-08-02 01:20",
            text: "Привет, все хорошо, спасибо!",
          },
          {
            id: 3,
            author: "petya",
            created: "2019-08-02 05:20",
            text: "А у тебя?",
          },
        ],
      },
      {
        id: 2,
        subject: "Вопрос по домену",
        created: "2016-03-02 14:19",
        parts: [
          {
            id: 1,
            author: "petya",
            created: "2019-08-06 12:20",
            text: "Здравствуйте, тут есть кто-нибудь?",
          },
          {
            id: 2,
            author: "vasiliy",
            created: "2019-08-06 12:34",
            text: "Да, я вас слушаю!",
          },
          {
            id: 3,
            author: "petya",
            created: "2019-08-06 12:38",
            text: "Помогите мне настроить домен!",
          },
        ],
      },
    ],
  },
  mutations: {
    pushMessage(state, { dialogId, message }) {
      const dialog = state.dialogues.find((el) => el.id == dialogId);
      dialog.parts.push(message);
    },
  },
  actions: {
    sendMessage({ commit }, data) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          commit("pushMessage", data);
          res();
        }, 600);
      });
    },
  },
  getters: {
    getDialogues({ dialogues }) {
      return dialogues;
    },
    getDialogById: ({ dialogues }) => (dialogId) => {
      return dialogues.find((el) => el.id == dialogId);
    },
  },
};
