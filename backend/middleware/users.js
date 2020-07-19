const users = [];

const addUser = ({ id, name, room }) => {
    name.trim().toLowerCase()
    room.trim().toLowerCase()

    const existingUser = users.find((user) => user.room === room & user.name === name)

    if(existingUser) {
        return { error: 'username is taken'}
    }
    const user = { id, name, room }
    return null, user
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInMessage = (room) => users.filter((user) => user.room === room);



module.exports = { addUser, removeUser, getUser, getUsersInMessage }