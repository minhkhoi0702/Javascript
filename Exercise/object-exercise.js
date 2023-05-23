// viết 1 function kiểm tra value có phải object hay ko ?
// typeof  của "{} [] null" đều trả về object
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
// console.log(isObject(null))

// {a:1,b:2} ->[["a",1], ["b",2]]
function objectToArray(object) {
  if (!isObject(object)) return;
  // Cách 1
  // return Object.entries(object)
  // Cách2
  // const values = Object.keys(object).map((key) => [key,object[key]])
  // return values
  // cách 3
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại trả về false
    // if (object.hasOwnProperty(key)){}
    result.push([key,object[key]])
  }
  return result
}
// console.log(objectToArray({ a: 1, b: 2 }));

// without 
// ({a: 1, b: 2}, b) =>{a: 1}
function without(object,...key) {
    const newObject = {...object}
    console.log(key)
    key.forEach((item)=>{
        delete newObject[item]
    });
    
    return newObject
}
console.log(without({a: 1, b: 2}, "a","b"))
