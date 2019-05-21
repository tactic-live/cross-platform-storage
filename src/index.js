import WXStorage from './WXStorage';
import WebStorage from './WebStorage';

class StorageFactory {
  /**
   * 
   * @param {object} root window/wx
   */
  constructor(root = {}) {
    this.root = root;
  }
  /**
   * 根据类型获取storage对象
   * type为空时,自动识别环境 web/小程序环境返回(wrapped(sessionStorage/wx.storage))
   * 
   * @param {string} type session/local/miniprogram
   */
  getStorage(type) {
    let storage = undefined;
    switch (type) {
      case 'session':
        storage = new WebStorage(this.root.sessionStorage);
        break;
      case 'local':
        storage = new WebStorage(this.root.localStorage);
        break;
      case 'miniprogram':
        storage = new WXStorage(this.root);
        break;
      default:
        if (!this.root.sessionStorage) {
          storage = new WXStorage(this.root);
        } else {
          storage = new WebStorage(this.root.sessionStorage);
        }
    }
    return storage;
  }
}

export default StorageFactory;