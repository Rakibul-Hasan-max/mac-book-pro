//handle memory button event
document.getElementById('btn-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost')
    const memoryText = memoryCost.innerText;
    const memoryPrice = parseInt(memoryText);
    const extraMemoryPrice = memoryPrice + 180; 
    memoryCost.innerText = extraMemoryPrice;

    //update total price
    const totalCost = document.getElementById('total-cost');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 180;
    totalCost.innerText = updateTotalPrice;
})


//handle storage 512GB button event
document.getElementById('btn-storage-mid').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageText = storageCost.innerText;
    const storagePrice = parseInt(storageText);
    const extraStoragePrice = storagePrice + 100; 
    storageCost.innerText = extraStoragePrice;

    //update total price
    const totalCost = document.getElementById('total-cost');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 100;
    totalCost.innerText = updateTotalPrice;
})


//handle storage 1TB button event
document.getElementById('btn-storage-top').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageText = storageCost.innerText;
    const storagePrice = parseInt(storageText);
    const extraStoragePrice = storagePrice + 180; 
    storageCost.innerText = extraStoragePrice;

    //update total price
    const totalCost = document.getElementById('total-cost');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 180;
    totalCost.innerText = updateTotalPrice;
})


//handle delivery option button event
document.getElementById('btn-delivery').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost')
    const deliveryText = deliveryCost.innerText;
    const deliveryPrice = parseInt(deliveryText);
    const extraDeliveryPrice = deliveryPrice + 20; 
    deliveryCost.innerText = extraDeliveryPrice;

    //update total price
    const totalCost = document.getElementById('total-cost');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 20;
    totalCost.innerText = updateTotalPrice;
})


//update total price in footer
document.getElementById('btn-memory').addEventListener('click', function(){
    const totalCost = document.getElementById('total-cost-final');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 180;
    totalCost.innerText = updateTotalPrice;
})
document.getElementById('btn-storage-mid').addEventListener('click', function(){
    const totalCost = document.getElementById('total-cost-final');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 100;
    totalCost.innerText = updateTotalPrice;
})
document.getElementById('btn-storage-top').addEventListener('click', function(){
    const totalCost = document.getElementById('total-cost-final');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 180;
    totalCost.innerText = updateTotalPrice;
})
document.getElementById('btn-delivery').addEventListener('click', function(){
    const totalCost = document.getElementById('total-cost-final');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseInt(currentTotal);
    const updateTotalPrice = currentTotalPrice + 20;
    totalCost.innerText = updateTotalPrice;
})


//update total price using coupon code
document.getElementById('btn-apply').addEventListener('click', function(){
    const couponClick = document.getElementById('promo-input');
    const couponNum = couponClick.value;
    console.log(couponNum);
    if(couponNum == 'stevekaku'){
        return 0.2;}
    else {return 0;} 
})