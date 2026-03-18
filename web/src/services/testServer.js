export const testServer = () => fetch("http://localhost:3001/test")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));
