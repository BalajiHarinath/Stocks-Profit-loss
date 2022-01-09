const buyPrice = document.querySelector("#buy");
const quantity = document.querySelector("#qty");
const sellPrice = document.querySelector("#sell");
const btn = document.querySelector("#btn-stocks");
const message = document.querySelector("#output");

const showMessage = msg => message.innerText = msg;

const calculateProfitLoss = (b,s,q) => {
    if(b>s){
        const loss = (b-s)*q;
        const lossP = (loss/b)*100;
        showMessage("The loss is ₨ "+loss+" and the loss% is "+lossP+" 😌.")
        message.style.backgroundColor = "red";
    }
    else if(b<s){
        const profit = (s-b)*q;
        const profitP = (profit/b)*100;
        showMessage("The profit is ₨ "+profit+" and the profit% is "+profitP+" 😊.");
        message.style.backgroundColor = "green";
    }
    else{
        showMessage("No pain, no gain!!! 😐."); 
        message.style.backgroundColor = "yellow";
        message.style.color = "black";
    }
};

const clickHandler = () => {
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