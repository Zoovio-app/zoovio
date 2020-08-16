import { userConstanst } from "./constants";
import { firestore } from 'firebase';

export const getRealtimeUsers = (uid) => {
    //console.log('uid', uid)
    return async (dispatch) => {
        dispatch({ type: `${userConstanst.GET_REALTIME_USERS}_REQUEST`});
        const db = firestore();
        const unsubscribe = db.collection("users")
        // .where("uid", "!=", uid)
        .onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function(doc) {
                if(doc.data().uid != uid){
                    users.push(doc.data());
                }
            });
            //console.log(users);
            dispatch({ 
                type: `${userConstanst.GET_REALTIME_USERS}_SUCCESS`,
                payload: { users }
            });
        });
        return unsubscribe;
    }
}

export const updateMessage = (msgObj) => {
    return async dispatch => {
        const db = firestore();
        db.collection('chats')
        .add({
            ...msgObj,
            isView: false,
            createdAt: new Date()
        })
        .then((data) => {
            console.log('here is the data', data)
            //success
            dispatch({
                type: userConstanst.GET_REALTIME_MESSAGES,
                // payload: {chats: ["testing"]}
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
}

export const getRealtimeConversations = (user) => {
    return async dispatch => {
        const db = firestore();
        db.collection('chats')
        // .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {
            const chats = [];
            querySnapshot.forEach(doc => {
                if(
                    (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                    || 
                    (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                ){
                    chats.push(doc.data())
                }
            });
            dispatch({
                type: userConstanst.GET_REALTIME_MESSAGES,
                payload: { chats }
            })
            console.log(chats);
        })
        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


    }
}