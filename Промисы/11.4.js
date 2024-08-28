function chain(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`wrong user id`);
      }
      return response.json();
    })

    .then((user) => fetch(`https://api.github.com/users/${user.username}`))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`githubUser not found`);
      }
      return response.json();
    })
    .then(
      (gitUser) =>
         new Promise((res, rej) => {
          if(!gitUser.avatar_url) {
            rej(`githubUser image not found`)
          }
          let img = document.createElement("img");
          img.src = gitUser.avatar_url;
          document.body.append(img);

          setTimeout(() => {
            img.remove();
            res(gitUser);
          }, 5000);
        }
      )
    )
    .then((gitUser) =>
      console.log(`закончили показ пользователя ${gitUser.name}`)
    )
    .catch((err) => console.log(`ERROR`, err));
}

chain(1);
