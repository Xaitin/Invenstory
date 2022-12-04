import endpoints from "./modules/constants.js";
import {apiGet, apiPost} from "./modules/crud.js";


$(document).ready(function(){
    document.getElementById("order_create_submit").onclick = createOrder;
    let urlEnd = "get/AvailablePallets";
    apiGet(endpoints.dev + urlEnd, fillData);
});


function fillData(data){
    let table = document.getElementById("palletList")

    let pallets = data

    for (let i = 0; i < pallets.length; i++) {
        let rows = '<tr>'
        rows += '<td>' + (i+1) + '</a></td>' 
        rows += '<td>'+pallets[i].License_Plate+'</td>'
        rows += '<td>'+pallets[i].Lot+'</td>'
        rows += '</tr>'
        table.innerHTML+=(rows) 
    }
}

function createOrder(){
    let urlEnd = "post/Order";
    let order = {
        Client:"",
        Due_Date:"",
        Order_Num:"",
        pallets:[]
    };
    let client = document.getElementById("client_name");
    if (client !== null) {
        order.Client = client.value;
    }
    let date = document.getElementById("order_date");
    if (date !== null) {
        order.Due_Date = date.value;
    }
    let orderNum = document.getElementById("order_num");
    if (orderNum !== null) {
        order.Order_Num = orderNum.value;   
    }
    let palletList = document.getElementById("pallet_list");
    if (palletList !== null) {
        order.pallets = palletList.value.split(",");
    }
    let temp = JSON.stringify(order);
    console.log(temp);
    apiPost(endpoints.dev + urlEnd, temp, updatePallets);
}

function updatePallets(){
    let palletList = document.getElementById("pallet_list");
    let urlEnd = "post/UpdatePalletOrder"
    let pallets = [];
    let order = "";
    let orderNum = document.getElementById("order_num");
    
    if (orderNum !== null) {
        order = orderNum.value;   
    }

    if (palletList !== null) {
        pallets = palletList.value.split(",");
    }

    for (let pallet in pallets){
        let temp = {License_Plate: pallet, Order_Num: order}

        console.log(temp);
        apiPost(endpoints.dev + urlEnd, JSON.stringify(temp));

    }
}

