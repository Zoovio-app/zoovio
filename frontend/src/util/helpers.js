export const getUsersId = (chats, currentUserId, uid2) => {
  const set = new Set();

  chats.forEach((chat) => {
    if (!set.has(chat.recieverId)) {
      if (chat.recieverId !== currentUserId) {
        set.add(chat.recieverId);
      } else {
        set.add(chat.senderId);
      }
    }
  });
  if (uid2) {
    set.add(uid2);
    return set;
  } else {
    return set;
  }
};
