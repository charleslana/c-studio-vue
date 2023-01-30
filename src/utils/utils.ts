const handleWarn = () => {
  const originalWarn = window.console.warn;
  window.console.warn = e => {
    return e.includes('If this is a native custom element')
      ? ''
      : originalWarn(e);
  };
};

export default handleWarn;
