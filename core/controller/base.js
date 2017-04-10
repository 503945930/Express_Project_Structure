
/**
 * BaseControler.js
 *
 */
 class BaseControler {
   constructor (args) {
     this.http = args
     this.airConfig = global.airConfig
   /// this.http.req = {}
   }
   ip () {
     return '127.0.0.1'
   }
}
 module.exports = BaseControler
