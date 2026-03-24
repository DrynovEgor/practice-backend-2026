export const getRooms = () => fetch("http://localhost:3001/rooms")
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(err => {
        return err
    });
    