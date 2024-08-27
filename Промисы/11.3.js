function chain(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => fetch(`https://api.github.com/users/${user.username}`))
      .then((response) => response.json())
      .then(
        (gitUser) =>
          new Promise((res, rej) => {
            let img = document.createElement("img");
            img.src = gitUser.avatar_url;
            document.body.append(img);

            setTimeout(() => {
              img.remove();
              res(gitUser);
            }, 5000);
          })
      )
      .then(gitUser => console.log(`закончили показ пользователя ${gitUser.name}`))
}

chain(1)



function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => res.json()
  );
}

function getUserName(name) {
  return fetch(`https://api.github.com/users/${name.username}`)
  .then((res) => res.json()
  );
}

function displayImage(gitUser) {
  return new Promise((res, rej) => {
    let img = document.createElement("img");
    img.src = gitUser.avatar_url;
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      res(gitUser);
    }, 5000);
  });
}

getUser(2)
  .then((name) => getUserName(name))
  .then((userImage) => displayImage(userImage))
  .then((gitUser) => `закончили показ пользователя ${gitUser.name}`);
