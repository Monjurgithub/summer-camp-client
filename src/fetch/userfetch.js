export const saveUserDB = (userInDB) => {

    fetch(`${import.meta.env.VITE_server_link}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInDB),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }