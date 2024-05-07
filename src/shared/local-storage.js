export default class LocalStorage {
  constructor(key) {
    this.storage = window.localStorage;
    this.key = key;
  }

  setItems(value) {
    this.storage.setItem(this.key, JSON.stringify(value));
  }

  getItems() {
    const value = this.storage.getItem(this.key);
    return value ? JSON.parse(value) : null;
  }

  clear() {
    this.storage.clear();
  }
}
