import { ref } from "vue";

export default function useRequest() {
  const isFetching = ref(false);

  const sendRequest = async (callback) => {
    isFetching.value = true;
    await callback();
    isFetching.value = false;
  };

  return {
    isFetching,
    sendRequest,
  };
}
