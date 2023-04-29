export const getLocalStorageItem = (item) => (
  localStorage.getItem(item)
);

export const setLocalStorageItem = (key, value) => (
  localStorage.setItem(key, value)
);

export const clearLocalStorage = () => (
  localStorage.clear()
);

export const remvoveLocalStorageItem = (item) => (
  localStorage.removeItem(item)
);