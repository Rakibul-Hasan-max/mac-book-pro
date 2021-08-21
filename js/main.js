//handle memory button event
document.getElementById('btn-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost')
    const memoryText = memoryCost.innerText;
    const memoryPrice = parseInt(memoryText);
    const extraMemoryPrice = memoryPrice + 180; 
    memoryCost.innerText = extraMemoryPrice;
})


//handle storage 512GB button event
document.getElementById('btn-storage-mid').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageText = storageCost.innerText;
    const storagePrice = parseInt(storageText);
    const extraStoragePrice = storagePrice + 100; 
    storageCost.innerText = extraStoragePrice;
})


//handle storage 1TB button event
document.getElementById('btn-storage-top').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageText = storageCost.innerText;
    const storagePrice = parseInt(storageText);
    const extraStoragePrice = storagePrice + 180; 
    storageCost.innerText = extraStoragePrice;
})


//handle delivery option button event
document.getElementById('btn-delivery').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost')
    const deliveryText = deliveryCost.innerText;
    const deliveryPrice = parseInt(deliveryText);
    const extraDeliveryPrice = deliveryPrice + 20; 
    deliveryCost.innerText = extraDeliveryPrice;
})



//update total price
document.getElementById('btn-memory').addEventListener('click', function(){
    const totalCost = document.getElementById('total-cost');
    const currentTotal = totalCost.innerText;
    const currentTotalPrice = parseint(currentTotal);
    const updateTotalPrice = currentTotalPrice + 180;
    totalCost.innerText = updateTotalPrice;