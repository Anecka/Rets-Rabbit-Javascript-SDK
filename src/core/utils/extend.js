/**
 * Created by aclinton on 7/11/16.
 */
module.exports = function(target){
    for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i]){
            target[prop] = arguments[i][prop];
        }
    }
    return target;
};
