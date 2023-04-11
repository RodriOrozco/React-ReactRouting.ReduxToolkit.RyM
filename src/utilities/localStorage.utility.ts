//method to save the user info in LocalStorage
export const persistUserInfo = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};
//method to remove the user info in LocalStorage
export const clearPersistUserInfo = (key: string) => {
  localStorage.removeItem(key);
};
