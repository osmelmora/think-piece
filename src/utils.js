export const collectDocData = doc => {
  return {
    id: doc.id,
    ...doc.data()
  };
};
