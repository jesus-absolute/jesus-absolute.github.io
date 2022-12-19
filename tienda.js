
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
//forEach, por cada boton hace algo
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton')
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

function addToCartClicked(event) {
    const button = event.target;

    //Capturando todo el div
    const item = button.closest('.item');
    //console.log('🔥: addToCartClicked -> item', item);

    const itemTitle = item.querySelector('.menu_name').textContent;
    const itemPrice = item.querySelector('.menu_preci').textContent;
    const itemImage = item.querySelector('.menu_img').src;
    //console.log('🔥: addToCartClicked -> itemImage', itemImage);

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {

    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')
    //console.log('🔥: addItemToShoppingCart -> elementsTitle', elementsTitle);
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
            elementQuantity.value++;
            
            updateShoppingCartTotal();
            return;
        }
    }
        
    //console.log(itemTitle, itemPrice, itemImage);
    const shoppingCartRow = document.createElement('div')
    const shoppingCartContent = `
    <div class="shoppingCartItem">
        <div class="col-1">
            <div class="shopping-cart-item col-123">
                <img src=${itemImage} class="shopping-cart-image">
                <h4 class="shopping-cart-item-title shoppingCartItemTitle text-truncate">${itemTitle}</h4>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price col-123 col-23">
                <p class="item-pric shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-3">
            <div class="shopping-cart-quantity col-123 col-23">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quatityChange)

    updateShoppingCartTotal()
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
    //console.log('🔥: updateShoppingCartTotal -> shoppingCartTotal', shoppingCartTotal);

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')
    //console.log('🔥: updateShoppingCartTotal -> shoppingCartItems', shoppingCartItems);

    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$',''));
        //console.log('🔥: updateShoppingCartTotal -> shoppingCartItemPrice', shoppingCartItemPrice);

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        //console.log('🔥: updateShoppingCartTotal -> shoppingCartItemQuantity', shoppingCartItemQuantity);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        //console.log('🔥: updateShoppingCartTotal -> total', total);
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quatityChange(event) {
    const input = event.target
    //console.log('🔥: quatityChange -> input', input);
    input.value <= 0 ? input.value = 1 : null;
    updateShoppingCartTotal();
}

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerText = '';
    updateShoppingCartTotal();
}