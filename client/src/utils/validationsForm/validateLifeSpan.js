export const validateLifeSpanMin = (lifeSpanMin,lifeSpanMax) => {
      const errors = {};
      let lifeSpanMinN = Number(lifeSpanMin);
      let lifeSpanMaxN = Number(lifeSpanMax);
      if (lifeSpanMin.trim() === "") {
        errors.lifeSpan = "Please enter a life span min ";
      } else if (lifeSpanMinN === 0) {
        errors.lifeSpan = "life span Min cannot be zero";
      }
      if (lifeSpanMinN && lifeSpanMinN === lifeSpanMaxN) {
        errors.lifeSpan = "min life span cannot be equal to max life span";
      }
      if (lifeSpanMaxN && lifeSpanMinN > lifeSpanMaxN) {
        errors.lifeSpan =
          "Minimum life span cannot be greater than maximum life span";
      }
      return errors;
};
export const validateLifeSpanMax = (lifeSpanMax,lifeSpanMin) => {
     const errors = {};
     let lifeSpanMinN = Number(lifeSpanMin);
     let lifeSpanMaxN = Number(lifeSpanMax);
     if (lifeSpanMax.trim() === "") {
       errors.lifeSpan = "Please enter a life span min ";
     } else if (lifeSpanMaxN === 0) {
       errors.lifeSpan = "life span Min cannot be zero";
     }
     if (lifeSpanMaxN && lifeSpanMinN === lifeSpanMaxN) {
       errors.lifeSpan =
         "min life span cannot be equal to max life span";
     }
     if (lifeSpanMaxN && lifeSpanMinN > lifeSpanMaxN) {
       errors.lifeSpan =
         "Minimum life span cannot be greater than maximum life span";
     }
     return errors;
};
