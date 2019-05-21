/**
 * wrap微信对象
 */
class WXStorage {
    constructor(root) {
        // 微信对象wx
        this.root = root
    }
    getWX() {
        return this.root;
    }
    getItem(key) {
        return this.getWX().getStorageSync(key);
    }
    setItem(key, val) {
        this.getWX().setStorageSync(key, val);
    }
    getItemAsync(key) {
        return new Promise((resolve, reject) => {
            this.getWX().getStorage({
                key,
                success(result) {
                    resolve(result.data)
                },
                fail(err){
                    reject(result)
                }
            });
        })
    }
    setItemAsync(key, val) {
        return new Promise((resolve, reject) => {
            this.getWX().setStorage({
                key, 
                data: val,
                success() {
                    resolve()
                },
                fail(err){
                    reject(result)
                }
            });
        });
    }

}

export default WXStorage;