const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`No element selected at: ${selection}`);
};

export default getElement;
