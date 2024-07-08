// Return Promise using function getResponseFromAPI()
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const cond = true;
    if (cond) {
      resolve();
    } else {
      reject();
    }
  });
}
