const chemicalName = document.querySelector(".chemical-name");
const chemicalQuantity = document.querySelector(".chemical-quantity");

const getDataFromLocalStorage = function (keyName) {
  let lastname = JSON.parse(localStorage.getItem(keyName));
  return lastname;
};

const data = { ...localStorage };
const objectArr = Object.keys(data);

window.addEventListener("load", function () {
  objectArr.forEach(function (curr) {
    const objectKey = getDataFromLocalStorage(curr);
    console.log(objectKey.name);
  });
});
