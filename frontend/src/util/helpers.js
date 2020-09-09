export const getUsersId = (chats, currentUserId) => {
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

  return set;
};
