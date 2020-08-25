import { firestore } from 'firebase';
import { GET_REALTIME_USERS, GET_REALTIME_MESSAGES } from '../features/docSRC/slices/messagingInfoSlice';



// redux toolkit way
export const getRealtimeUsers = (uid) => async ( dispatch, getState ) => {
    // async thunk dispatches function ; thunk knows function vs. action
    // action === object
    // reducer ==== does the shit 
    const db = firestore();
    const unsubscribe = db.collection("users")
    .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach(function(doc) {
            if(doc.data().uid != uid) {
                users.push(doc.data());
            }
        })
        dispatch(GET_REALTIME_USERS({users}));
    })
}


export const updateMessage = (msgObj) => async( dispatch, getState ) =>{
    const db = firestore();
       db.collection('chats')
       .add({
           ...msgObj,
           isView: false,
           createdAt: JSON.stringify({ date: new Date() })
       })
       .then((data) => {
           console.log('here is the data', data)
           //success
           dispatch(GET_REALTIME_MESSAGES())
       })
       .catch(error => {
           console.log(error)
       });
}


export const getRealtimeConversations = (user) => async( dispatch, getState ) => {
    const db = firestore();
    db.collection('chats')
    .orderBy('createdAt', 'asc')
    .onSnapshot((querySnapshot) => {
        const chats = [];
        querySnapshot.forEach(doc => {
            if(
                (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                ||
                (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                ) {
                    chats.push(doc.data())
                }
        });
        dispatch(GET_REALTIME_MESSAGES({ chats }))
        console.log(chats)
        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'
    })
}
