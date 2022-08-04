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
