var totalPrice = 0.00;
function handleCLikCard(data) {
    const itemName = data.childNodes[5].innerText;
    const itemPrice = data.childNodes[7].innerText.split(" ")[0];

    //create element for showing item name and add item 
    const li = document.createElement('p');
    const selectedItemContainer = document.getElementById('selected-items');
    const count = selectedItemContainer.childElementCount;
    li.innerHTML = `${count +1}. ${itemName}`;
    selectedItemContainer.appendChild(li);

    //total price calculation
    const totalPriceElement = document.getElementById('total-price-container');
    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    totalPriceElement.innerText = totalPrice.toFixed(2);
    const makePurchaseBtn = document.getElementById('make-purchase-btn');

    //make purchase button active when total price is grater than 0;
    if (totalPrice > 0) {
        makePurchaseBtn.removeAttribute("disabled");
    }else{
         makePurchaseBtn.setAttribute("disabled", true);
    }

    //apply btn active 
    const applyBtn = document.getElementById('apply-btn');
    const discountContainer = document.getElementById('discount-container');
    const totalContainer = document.getElementById('total-container');

    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
        document.getElementById('apply-btn').addEventListener('click', function () {
            const couponCode = document.getElementById('coupon-code').value;
            if (couponCode === "SELL200"){
                const discount = (totalPrice * 20) / 100;
                discountContainer.innerText = discount.toFixed(2);
                const total = totalPrice - discount;
                totalContainer.innerText = total.toFixed(2);
            }else{
                alert('Invalid Coupon Code.Please Try Again.')
                return;
            }
        })
    }else{
         applyBtn.setAttribute("disabled", true);
    }
    //go home screen 
    document.getElementById('go-home-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    })
    
}