const buyPrice = document.querySelector("#buy");
const quantity = document.querySelector("#qty");
const sellPrice = document.querySelector("#sell");
const btn = document.querySelector("#btn-stocks");
const message = document.querySelector("#output");

function showMessage(msg){
    message.innerText = msg;
}

function calculateProfitLoss(b,s,q){
    if(b>s){
        const loss = b-s;
        const lossP = (loss/b)*100;
        showMessage("The loss is ₨ "+loss+" and the loss% is "+lossP+" 😌.")
        message.style.backgroundColor = "red";
    }
    else if(b<s){
        const profit = s-b;
        const profitP = (profit/b)*100;
        showMessage("The profit is ₨ "+profit+" and the profit% is "+profitP+" 😊.");
        message.style.backgroundColor = "green";
    }
    else{
        showMessage("No pain, no gain!!! 😐."); 
        message.style.backgroundColor = "yellow";
    }
};

function clickHandler(){
    const buyP = Number(buyPrice.value);
    const sellP = Number(sellPrice.value);
    const quant = Number(quantity.value); 
    if(buyP && sellP && quant){
        calculateProfitLoss(buyP, sellP, quant);
    }
    else{
        showMessage("Please enter the value for all the fields"); 
    }
};



btn.addEventListener("click", clickHandler);