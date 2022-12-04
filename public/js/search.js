import endpoints from "./modules/constants.js";
import {apiGet} from "./modules/crud.js";

let urlEnd = "get/Pallet";
document.getElementById("licence_search_butt").onclick = findPallet;

function findPallet(){
    let query = urlEnd + "?lp=" + document.getElementById("licence_search").value;
    apiGet(endpoints.dev + query, searchResults);
}

function searchResults(data){
    data = data[0];
    // pallet = data;
    document.getElementById("licence_plate").innerHTML = data.License_Plate;
    document.getElementById("lot").innerHTML = data.Lot;
    document.getElementById("location").innerHTML = data.Location;
    document.getElementById("picked").innerHTML = data.picked;
    document.getElementById("order_num").innerHTML = data.Order_Num;
}