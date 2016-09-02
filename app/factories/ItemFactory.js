"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items.json`)
      .success((itemObject) => {
        Object.keys(itemObject).forEach((key) => {
          itemObject[key].id = key;
          //taking the long id and sticking it inside each object on a property called id
          items.push(itemObject[key]);
          //take that item and push it into the items array, and when it is resolved we are pushing the array

        });
        resolve(items);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q ((resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
      .success((ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    return $q( (resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success( (objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };

  return {getItemList, postNewItem, deleteItem};
});
//promises/ajax calls using the angular library - $http - angular http library (ajax stuff). $q is for promises.  .success = .done
//return the function to make it avaliable to anywhere that needs the data
