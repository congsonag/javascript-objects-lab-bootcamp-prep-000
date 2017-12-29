var recipes = {breakfast: 'pomme de terre'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { key: value })
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var cloneObject = Object.assign( {}, object);
  delete cloneObject.key;
  return cloneObject
}
// console.log(deleteFromObjectByKey(recipes, 'breakfast'))
