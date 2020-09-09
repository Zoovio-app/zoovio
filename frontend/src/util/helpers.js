export const getUsersId = (chats) => {
  const set = new Set();

  chats.forEach((chat) => {
    if (!set.has(chat.user_uid_2)) {
      set.add(chat.user_uid_2);
    }
  });

  return set;
};
