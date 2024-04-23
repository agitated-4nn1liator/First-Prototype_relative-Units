const add = document.querySelector('.add-cart-butt');
const inputChemical1TOtal = document.querySelector('.input-chemical-1-total');
const inputChemical1 = document.querySelector('.input-chemical-1');

add.addEventListener('click', function(e){
    e.preventDefault();
    const totalQuantity = inputChemical1TOtal.textContent;
    console.log(totalQuantity);
    // let quantityToBeSubtracted = inputChemical1.value;
    // let totalQuantity =  Number(inputChemical1TOtal.textContent);
    // totalQuantity = Number(totalQuantity) -  Number(quantityToBeSubtracted);
    // inputChemical1TOtal.textContent = Number(totalQuantity);
}
)
