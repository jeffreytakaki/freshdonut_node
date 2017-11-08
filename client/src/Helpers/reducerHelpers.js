export function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    console.log('object assign',Object.assign({}, oldObject, newValues))
    return Object.assign([], oldObject, newValues);
}

export function convertToArray(obj) {
    let arr = []
    Object.keys(obj).map(function(i){
        arr.push(obj[i])
    })

    return arr;
}