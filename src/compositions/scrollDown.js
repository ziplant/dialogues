export default function useScrollDown() {
  const scrollDown = (elem) => {
    elem.scrollTop = elem.scrollHeight;
  };

  return {
    scrollDown,
  };
}
