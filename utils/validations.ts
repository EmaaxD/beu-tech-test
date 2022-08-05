export const validationString = (str: string) =>
  new Promise((resolve, reject) => {
    if (str.trim() === "") {
      reject({ message: "Todos los campos son requeridos" });
      return;
    }

    if (/(<[a-z>(')/<]*)/.exec(str)) {
      reject({ message: "No se aceptan caracteres especiales" });
      return;
    }

    resolve(str.trim().toLowerCase());
  });

export const getLengthString = (str: string, limit = 10) => {
  let newString = str;

  if (str.length > limit) {
    newString = str.slice(0, limit);
  }

  return newString;
};
