export const asyncCode = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === "error") {
        reject("error");
      } else {
        resolve(text);
      }
    }, 1000);
  });
};
