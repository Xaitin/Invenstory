import endpoints from "./modules/constants.js";
import {apiGet, apiPost} from "./modules/crud.js";

let urlEnd = "get/Inbound_Shipment"
let postEnd = "post/Pallet";

 
$(document).ready(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const query = "?shipment="+urlParams.get('shipment');
    apiGet(endpoints.dev + urlEnd + query, addTableRows);
});

function addTableRows(data){
    let table = document.getElementById("palletList")
    for(let i = 0; i < data.length; i++){
        
        let pallets = data[i].pallets

        for (let i = 0; i < pallets.length; i++) {
            let rows = '<tr>'
            rows += '<td class="' + i + '">' + (i+1) + '</a></td>' 
            rows += '<td class="' + i + '">' + pallets[i].lot + '</td>'
            rows += '<td><input class="' + i + '" type="text" id="location_input"  placeholder=""></td>'
            rows += '<td><input class="' + i + '" type="text" id="license_input" placeholder=""></td>'
            rows += '<td><a id="addButton'+i+'" class="'+i+'" type="button" >Add</a></td>' 
            rows += '</tr>'
            table.innerHTML+=(rows) 
        }
        for (let i = 0; i < pallets.length; i++) {    
            (function (i) {
            let addButton = document.getElementById("addButton"+i);
            addButton.addEventListener('click',  addPallet);
            }(i))
        }
    }
}

function addPallet(){
    const palletData = document.getElementsByClassName(this.className);
    // console.log("num: "+palletData[0].innerHTML);
    // console.log("lot: "+palletData[1].innerHTML);
    // console.log("loc: "+palletData[2].value);
    // console.log("lp: "+palletData[3].value);
    if (checkInput(palletData[2].value) && checkInput(palletData[3].value)){
        palletData[4].innerHTML= null;
        let pallet = {License_Plate:palletData[3].value, Location:palletData[2].value, Lot:palletData[1].innerHTML, Order_Num:"", picked:false};
        let temp = JSON.stringify(pallet);
        apiPost(endpoints.dev + postEnd, temp);
    } else {
        window.alert("Please make sure a location and license plate are entered")
    }
}

function checkInput(str){
    if (str === '') {
        return false;
    }
    if (str.trim() === '') {
        return false;
    } 
    return true;
}