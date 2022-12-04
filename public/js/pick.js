import endpoints from "./modules/constants.js";
import {apiGet, apiPost} from "./modules/crud.js";

let orderEnd = "get/Order?Order_Num=";
let palletEnd = "get/Pallets?lps=";
let postEnd = "post/Pallet";

$(document).ready(function(){
    let url = window.location.href;
    let paramString = new RegExp('(.*)[?](.*)').exec(url);
    let paramList = paramString[2].split('?');
    orderEnd += paramList[0];
    apiGet(endpoints.dev + orderEnd, getOrder);
});

function getOrder(data){
    // console.log(data)
    let order_pallets = data[0].pallets;
    // console.log(order_pallets)
    apiGet(endpoints.dev + palletEnd + order_pallets, fillPalletData);
}

function fillPalletData(data){
    for(let p = 0; p<data.length; p++){
        let pallet = data[p];
        // console.log(pallet);
        let row = document.createElement('tr');
        let h1 = document.createElement('th');
        let h2 = document.createElement('th');
        let h3 = document.createElement('th');
        let h4 = document.createElement('th');
        let h5 = document.createElement('th');
        let h5_checkbox = document.createElement('input');

        h5_checkbox.type = "checkbox";
        h5_checkbox.checked = pallet.picked;
        h5_checkbox.id = p+1;

        h1.innerHTML = p+1;
        h2.innerHTML = pallet.License_Plate;
        h3.innerHTML = pallet.Lot;
        h4.innerHTML = pallet.Location;
        h5_checkbox.addEventListener('click', function() {
            // console.log(pallet);
            if (this.checked === true) {
                pallet.picked = true;
                let data = JSON.stringify(pallet);
                apiPost(endpoints.dev + postEnd, data);
            } else {
                pallet.picked = false;
                let data = JSON.stringify(pallet);
                apiPost(endpoints.dev + postEnd, data);
            }
        });
        h5.appendChild(h5_checkbox);

        row.appendChild(h1);
        row.appendChild(h2);
        row.appendChild(h3);
        row.appendChild(h4);
        row.appendChild(h5);
        document.getElementById('palletDisplay').appendChild(row);
    }
}

// function pickedClickFunction(){
    
           
// }