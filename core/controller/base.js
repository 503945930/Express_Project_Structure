
/**
 * BaseControler.js
 *
 */
export default class BaseControler {
  constructor (args) {
    this.http = args
   /// this.http.req = {}
  }
  ip () {
    return '127.0.0.1'
  }
}
