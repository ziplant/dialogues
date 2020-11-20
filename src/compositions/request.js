import { ref } from "vue";

export default function useRequest() {
  const isFetching = ref(false);

  const sendRequest = async (callback) => {
    isFetching.value = true;
    const result = await callback();
    isFetching.value = false;
    return result;
  };

  return {
    isFetching,
    sendRequest,
  };
}
