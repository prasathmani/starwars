/**
 * get Character id from url
 * @param {String} url 
 * @returns {Number}
 */
export function getCharacterId(url) {
    return url.split('/')?.[5]
}