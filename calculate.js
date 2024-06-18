var shirts = 0;
var shorts = 0;
var pants = 0;
var long = 0;
var total = document.getElementById("total");
var shirtTotal = document.getElementById("shirtCount")
var shortTotal = document.getElementById("shortCount")
var pantTotal = document.getElementById("pantCount")
var longTotal = document.getElementById("longCount")
var shirtPrice = document.getElementById("shirtPrice")
var shortPrice = document.getElementById("shortPrice")
var pantPrice = document.getElementById("pantPrice")
var longPrice = document.getElementById("longPrice")

var USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

var shirtsPrice = 0.25;
var shortsPrice = 0.1;
var pantsPrice = 0.15;
var longsPrice = 0.3;

function select(selectClass, removeBool) {
    if (selectClass == "shirt"){
        if (removeBool === false){
            shirts++;
        } else if (removeBool === true && shirts > 0){
            shirts--;
        };
        shirtTotal.textContent = shirts;
        let curTotal = shirts * shirtsPrice
        shirtPrice.textContent = USDollar.format(curTotal)
    } else if (selectClass == "short"){
        if (removeBool === false){
            shorts++;
        } else if (removeBool === true && shorts > 0){
            shorts--;
        };
        shortTotal.textContent = shorts;
        let curTotal = shorts * shortsPrice
        shortPrice.textContent = USDollar.format(curTotal)
    }else if(selectClass == "pant"){
        if (removeBool === false){
            pants++;
        } else if (removeBool === true && pants > 0){
            pants--;
        };
        pantTotal.textContent = pants;
        let curTotal = pants * pantsPrice
        pantPrice.textContent = USDollar.format(curTotal)
    } else if(selectClass == "long"){
        if (removeBool === false){
            long++;
        } else if (removeBool === true && long > 0){
            long--;
        };
        longTotal.textContent = long;
        let curTotal = long * longsPrice
        longPrice.textContent = USDollar.format(curTotal)
    }else{
        alert("Fail");
    }
    let newPrice = (shirts * shirtsPrice) + (shorts * shortsPrice) + (pants * pantsPrice) + (long * longsPrice);
    total.textContent = USDollar.format(newPrice);
};