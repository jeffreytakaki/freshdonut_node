export function findStoreFromState(storeid, state) {

    let store = storeid.replace('/store/', '');
    let save = false;

    state.forEach(function(value){
        if(value._id === store) {
            save = value;
        }
    })

    return save;

}