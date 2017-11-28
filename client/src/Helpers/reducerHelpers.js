export function updateObject(type = [], oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    // console.log('object assign => type', type)
    // console.log('object assign => old state', oldObject)
    // console.log('object assign => new values', newValues)
    // console.log('object assign',Object.assign({}, oldObject, newValues))

    return Object.assign(type, oldObject, newValues);
}

export function convertToArray(obj) {
    let arr = []
    Object.keys(obj).map(function(i){
        arr.push(obj[i])
    })

    return arr;
}