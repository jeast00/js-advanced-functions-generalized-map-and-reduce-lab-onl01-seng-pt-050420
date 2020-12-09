// Add your functions here
const map = function(source, callback) {
  let result = [];
  for(let i = 0; i < source.length; i ++) {
    let element = source[i];
    result.push(callback(element));
  }
  return result;
}


const reduce = function(source, callback, startingPoint) {
  let result = (!!startingPoint)
}