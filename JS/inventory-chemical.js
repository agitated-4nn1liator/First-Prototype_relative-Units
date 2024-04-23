const getDataFromLocalStorage = function (keyName) {
  let lastname = JSON.parse(localStorage.getItem(keyName));
  console.log(lastname);
};

// Chemical 1
const addBtn1 = document.querySelector(".input-chemical-1-button");
const inputChemical1Total = document.querySelector(".input-chemical-1-total");
const inputChemical1 = document.querySelector(".input-chemical-1-value");
const chemical1Name = document.querySelector(".chemical-1-name");

addBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical1Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical1.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical1Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical1.value = "";

  let chemicalName = chemical1Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  // getDataFromLocalStorage(chemicalName);
});

// Chemical 2
const addBtn2 = document.querySelector(".input-chemical-2-button");
const inputChemical2Total = document.querySelector(".input-chemical-2-total");
const inputChemical2 = document.querySelector(".input-chemical-2-value");
const chemical2Name = document.querySelector(".chemical-2-name");

addBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical2Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical2.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical2Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical2.value = "";

  let chemicalName = chemical2Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 3
const addBtn3 = document.querySelector(".input-chemical-3-button");
const inputChemical3Total = document.querySelector(".input-chemical-3-total");
const inputChemical3 = document.querySelector(".input-chemical-3-value");
const chemical3Name = document.querySelector(".chemical-3-name");

addBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical3Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical3.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical3Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical3.value = "";

  let chemicalName = chemical3Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 4
const addBtn4 = document.querySelector(".input-chemical-4-button");
const inputChemical4Total = document.querySelector(".input-chemical-4-total");
const inputChemical4 = document.querySelector(".input-chemical-4-value");
const chemical4Name = document.querySelector(".chemical-4-name");

addBtn4.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical4Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical4.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical4Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical4.value = "";

  let chemicalName = chemical4Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 5
const addBtn5 = document.querySelector(".input-chemical-5-button");
const inputChemical5Total = document.querySelector(".input-chemical-5-total");
const inputChemical5 = document.querySelector(".input-chemical-5-value");
const chemical5Name = document.querySelector(".chemical-5-name");

addBtn5.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical5Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical5.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical5Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical5.value = "";

  let chemicalName = chemical5Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 6
const addBtn6 = document.querySelector(".input-chemical-6-button");
const inputChemical6Total = document.querySelector(".input-chemical-6-total");
const inputChemical6 = document.querySelector(".input-chemical-6-value");
const chemical6Name = document.querySelector(".chemical-6-name");

addBtn6.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical6Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical6.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical6Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical6.value = "";

  let chemicalName = chemical6Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 7
const addBtn7 = document.querySelector(".input-chemical-7-button");
const inputChemical7Total = document.querySelector(".input-chemical-7-total");
const inputChemical7 = document.querySelector(".input-chemical-7-value");
const chemical7Name = document.querySelector(".chemical-7-name");

addBtn7.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical7Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical7.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical7Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical7.value = "";

  let chemicalName = chemical7Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 8
const addBtn8 = document.querySelector(".input-chemical-8-button");
const inputChemical8Total = document.querySelector(".input-chemical-8-total");
const inputChemical8 = document.querySelector(".input-chemical-8-value");
const chemical8Name = document.querySelector(".chemical-8-name");

addBtn8.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical8Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical8.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical8Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical8.value = "";

  let chemicalName = chemical8Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 9
const addBtn9 = document.querySelector(".input-chemical-9-button");
const inputChemical9Total = document.querySelector(".input-chemical-9-total");
const inputChemical9 = document.querySelector(".input-chemical-9-value");
const chemical9Name = document.querySelector(".chemical-9-name");

addBtn9.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical9Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical9.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical9Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical9.value = "";

  let chemicalName = chemical9Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 10
const addBtn10 = document.querySelector(".input-chemical-10-button");
const inputChemical10Total = document.querySelector(".input-chemical-10-total");
const inputChemical10 = document.querySelector(".input-chemical-10-value");
const chemical10Name = document.querySelector(".chemical-10-name");

addBtn10.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical10Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical10.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical10Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical10.value = "";

  let chemicalName = chemical10Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 11
const addBtn11 = document.querySelector(".input-chemical-11-button");
const inputChemical11Total = document.querySelector(".input-chemical-11-total");
const inputChemical11 = document.querySelector(".input-chemical-11-value");
const chemical11Name = document.querySelector(".chemical-11-name");

addBtn11.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical11Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical11.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical11Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical11.value = "";

  let chemicalName = chemical11Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// Chemical 12
const addBtn12 = document.querySelector(".input-chemical-12-button");
const inputChemical12Total = document.querySelector(".input-chemical-12-total");
const inputChemical12 = document.querySelector(".input-chemical-12-value");
const chemical12Name = document.querySelector(".chemical-12-name");

addBtn12.addEventListener("click", function (e) {
  e.preventDefault();
  const totalQuantity = inputChemical12Total.textContent;
  //   console.log(totalQuantity);

  let quantityToBeSubtracted = inputChemical12.value;
  //   console.log(quantityToBeSubtracted);

  inputChemical12Total.textContent = totalQuantity - quantityToBeSubtracted;
  inputChemical12.value = "";

  let chemicalName = chemical12Name.textContent;

  const chemicalObject = {
    name: chemicalName,
    value: quantityToBeSubtracted,
  };

  localStorage.setItem(chemicalName, JSON.stringify(chemicalObject));

  getDataFromLocalStorage(chemicalName);
});

// const chemical1RealName = chemical1Name.textContent;
// const chemical2RealName = chemical2Name.textContent;
// const chemical3RealName = chemical3Name.textContent;
// const chemical4RealName = chemical4Name.textContent;
// const chemical5RealName = chemical5Name.textContent;
// const chemical6RealName = chemical6Name.textContent;
// const chemical7RealName = chemical7Name.textContent;
// const chemical8RealName = chemical8Name.textContent;
// const chemical9RealName = chemical9Name.textContent;
// const chemical10RealName = chemical10Name.textContent;
// const chemical11RealName = chemical11Name.textContent;
// const chemical12RealName = chemical12Name.textContent;

// export {
//   chemical1RealName,
//   chemical2RealName,
//   chemical3RealName,
//   chemical4RealName,
//   chemical5RealName,
//   chemical6RealName,
//   chemical7RealName,
//   chemical8RealName,
//   chemical9RealName,
//   chemical10RealName,
//   chemical11RealName,
//   chemical12RealName,
// };
