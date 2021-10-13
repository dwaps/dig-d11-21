export const applyBgBlur = () => {
  document.body.className = window.innerWidth<768 && 'bg-blur';
}
