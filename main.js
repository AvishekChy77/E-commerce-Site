const cartDiv = document.getElementById('purchase-list')
const purchaseButton = document.getElementById('purchase-btn');
const couponButton = document.getElementById('coupon-btn');
const promoButton = document.getElementById('promo');
const couponInput = document.getElementById('coupon-input');
const totalPriceElement = document.getElementById('price');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');
const homeButton = document.getElementById('home');



let total = 0
function addToCart(target){
    const itemName = target.childNodes[3].childNodes[3].innerText;
    
    const count = cartDiv.childElementCount;
    const p = document.createElement("p");
    p.innerText = `${count + 1}. ${itemName}`;
    cartDiv.appendChild(p);
    
    const itemPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(itemPrice);
    
    totalPriceElement.innerText = parseFloat(total).toFixed(2);

    if(discountElement.innerText == 0){
        totalElement.innerText = parseFloat(total).toFixed(2);
    }
    else{
        const discount = parseInt(totalPriceElement.innerText) * 0.20;
        const discountInt = parseFloat(discount).toFixed(2);
        discountElement.innerText = discountInt;
        
        const totalFinal = parseInt(totalPriceElement.innerText) - discountInt;
        const totalFinalInt = parseFloat(totalFinal).toFixed(2);
        totalElement.innerText = totalFinalInt;
    }


    if(totalPriceElement.innerText != 0){
        purchaseButton.removeAttribute('disabled');
    }
    else{
        purchaseButton.setAttribute('disabled', true)
    }
    
    if(totalPriceElement.innerText >= 200){
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled', true)
    }
}

promoButton.addEventListener('click', function(){
    couponInput.value = "SELL200"
})

couponButton.addEventListener('click', function(){
    if(couponInput.value == "SELL200"){
        const discount = parseInt(totalPriceElement.innerText) * 0.20;
        const discountInt = parseFloat(discount).toFixed(2);
        discountElement.innerText = discountInt;
        
        const totalFinal = parseInt(totalPriceElement.innerText) - discountInt;
        const totalFinalInt = parseFloat(totalFinal).toFixed(2);
        totalElement.innerText = totalFinalInt;
        couponInput.value = "";
    }
    else{
        alert('invalid Coupon!')
        couponInput.value = "";
    }
})
console.log(homeButton)

homeButton.addEventListener('click', function(){
    cartDiv.innerHTML =""
    totalPriceElement.innerText = "0.00";
    totalElement.innerText = "0.00";
    discountElement.innerText = "0.00";
    purchaseButton.setAttribute('disabled', true);
    couponButton.setAttribute('disabled', true);
    total = 0;
})