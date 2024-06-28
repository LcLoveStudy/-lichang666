import { ref, watch, type Ref } from "vue";
/**
 * 传入key，返回对应的localstorage值
 * @param {string} key localstorage中存储的key
 * @param {any} defaultValue 初始默认值，localstorage中没有该key时赋值给该key
 * @returns 返回一个ref对象，修改该对象会同步到localstorage中,
 * 赋值为null或者undefined时清空该localstorage
 */
export const useLocalStorage = <T>(
  key: string,
  defaultValue?: T
): Ref<T | undefined> => {
  const storageItem = ref<T>();
  const initValue = localStorage.getItem(key);
  if (initValue === null && defaultValue) {
    storageItem.value = defaultValue;
  } else if (initValue) {
    storageItem.value = JSON.parse(initValue);
  }
  watch(
    () => storageItem.value,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    },
    {
      immediate: true,
      deep: true,
    }
  );
  return storageItem;
};
