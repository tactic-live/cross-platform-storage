/**
 * wrap微信对象
 */
class WebStorage {
    constructor(root) {
        // window对象
        this.root = root
    }
    getStorage() {
        return this.root;
    }
    getItem(key) {
        return this.getStorage().getItem(key);
    }
    setItem(key, val) {
        this.getStorage().setItem(key, val);
    }
    getItemAsync(key) {
        return new Promise((resolve, reject) => {
            try {
                const result = this.getItem(key);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    }
    setItemAsync(key, val) {
        return new Promise((resolve, reject) => {
            try {
                this.setItem(key, val);
                resolve();
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default WebStorage;