export function loginCall(userName, password) {
  const users = [
    {
      id: 200,
      name: "Joao",
      password: "1234567",
    },
    {
      id: 201,
      name: "Maria",
      password: "1234567",
    },
    {
      id: 202,
      name: "Pedro",
      password: "1234567",
    },
  ];

  let filteredUser = users.filter((user) => {
    return user.name == userName;
  });

  return new Promise((resolve, reject) => {
    if (
      userName == filteredUser[0].name &&
      password == filteredUser[0].password
    ) {
      resolve();
    } else {
      reject({ message: "usuario ou senha incorretos" });
    }
  });
}
