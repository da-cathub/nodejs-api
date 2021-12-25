// CatHub API 
// ================
// nodejs wrapper
//
// 

const request = require('request'),
      serverUrl = `https://api.cathub.space/`;
      
/**
 * @param {String} url 
 * @returns {Promise|any}
 */
function asyncRequest (url) {
   return new Promise (function (resolve, reject) {
     var options = {
        url: serverUrl + url
     }
     request(options, function (err, response, body) {
       if (err) reject(err);
       if (response.statusCode != 200) reject(body);
       if (body.hasOwnProperty(`error`)) reject(body);
       resolve(JSON.parse(body))
     });
   })
}

// ====================

/**
 * Returns a random image depends on `:howManyCats`
 * @params {Number} howManyCats Number between `1-100`
 * @returns {Array[{{id: String, author:String, imageURL: String, type:String, ghost:false}}]} Returns amount in `howManyCats` as an array
 * https://api.cathub.space/#random
 */
async function random(howManyCats=1) {
  let number = (Number(howManyCats) != NaN) ? howManyCats : 1;
  let result = await asyncRequest(`random/${number}`)
  return result.result
}

/**
 * Shows image with id of `:id`
 * @params {String} id
 * @returns {{id:String, author:String, imageURL:String, type:String, ghost:false}}
 * https://api.cathub.space/#get/:id
 */
async function get(id) {
  let requested = (String(id) != `undefined`) ? id : `ycg2x0qa`;
  let result = await asyncRequest(`get/${requested}`)
  return result
} 

/**
 * Shows images by author with id of `:id`
 * @params {String} id
 * @returns {Array{{id:String, author:String, imageURL:String, type:String, ghost:false}}}
 * https://api.cathub.space/#author/:id
 */
async function author(id) {
  let requested = (String(id) != `undefined`) ? id : `CharlieCat`;
  let result = await asyncRequest(`author/${requested}`)
  return result
} 

module.exports = {
  random, get, author
}
