import endpoints from "./modules/constants.js";
import {apiGet} from "./modules/crud.js"

const urlEnd = "get/Inbound_Shipments"

$(document).ready(function(){
    apiGet(endpoints.dev + urlEnd,  addTableRows);
});

function addTableRows(data){
    let table = document.getElementById("inboundList")
    for (let i = 0; i < data.length; i++) {
        let inbounds = data[i]
        
        let rows = '<tr>'
        rows += '<td><a href="./receiving.html?shipment=' + inbounds.shipment + '">' + inbounds.shipment + '</a></td>' 
        rows += '<td>' + inbounds.client + '</td>'
        rows += '<td>' + inbounds.date + '</td>'
        rows += '<td>' + inbounds.num_pallets + '</td>'
        rows += '<td><a href="./receiving.html?shipment=' + inbounds.shipment + '" class="button">Open</a></td>' 
        rows += '</tr>'
        table.innerHTML+=(rows) 
    }
}