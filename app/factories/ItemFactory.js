"use strict";

app.factory("ItemStorage", ($q, $http) => {

  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get("../../data/itemList.json")
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  return {getItemList};
});
//promises/ajax calls using the angular library - $http - angular http library (ajax stuff). $q is for promises.  .success = .done
//return the function to make it avaliable to anywhere that needs the data
