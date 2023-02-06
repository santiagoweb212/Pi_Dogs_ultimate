import axios from "axios";
export const validateImg = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(true);
    image.onerror = () => reject(false);
    image.src = url;
  });
};
