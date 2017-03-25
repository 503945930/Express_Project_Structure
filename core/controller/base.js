
/**
 * BaseControler.js
 *
 */
export default class BaseControler {
  constructor () {
    this.http = {
      'req': 'req',
      'res': 'res',
      'ip': '127.0.0.1'
    }
  }
  ip () {
    return '127.0.0.1'
  }
}
