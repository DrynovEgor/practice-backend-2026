export const auto = (form) => fetch("http://localhost:3001/auto", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
})
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(err => {
        return err
    });
