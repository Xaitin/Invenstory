import endpoints from "./modules/constants.js";
import {apiGet, apiPost} from "./modules/crud.js";

let pallet;

document.getElementById("licence_search_mod_butt").onclick = modGrabPallet;
document.getElementById("pallet_mod_submit").onclick = modSubmitPallet;


function modGrabPallet(){
    let urlEnd = "get/Pallet?lp=";
    urlEnd += document.getElementById("licence_search_mod").value;
    apiGet(endpoints.dev + urlEnd, fillData);
    // $.get("https://bcinvenstory.com/bciapi/get/Pallet?lp=" + plate_no, function(data, status){
    //     data = data[0];
    //     pallet = data;
    //     console.log(data)
    //     document.getElementById("mod_licence_plate").innerHTML = data.License_Plate;
    //     document.getElementById("mod_lot").innerHTML = data.Lot;
    //     document.getElementById("mod_location").innerHTML = data.Location;
    //     let pick = new Boolean(data.Picked);
    //     document.getElementById("mod_picked").innerHTML = pick.toString();
    //     document.getElementById("mod_order_num").innerHTML = data.Order_Num;
    // });
}

function fillData(data){
    data = data[0];
    pallet = data;
    console.log(data)
    document.getElementById("mod_licence_plate").innerHTML = data.License_Plate;
    document.getElementById("mod_lot").innerHTML = data.Lot;
    document.getElementById("mod_location").innerHTML = data.Location;
    let pick = new Boolean(data.Picked);
    document.getElementById("mod_picked").innerHTML = pick.toString();
    document.getElementById("mod_order_num").innerHTML = data.Order_Num;
}

function modSubmitPallet(){
    let urlEnd = "post/Pallet";
    let new_lot = document.getElementById("pallet_lot_mod");
    if (new_lot !== null) {
        pallet.Lot = new_lot.value;
    }
    let new_location = document.getElementById("pallet_location_mod");
    if (new_lot !== null) {
        pallet.Location = new_location.value;
    }
    let new_picked = document.getElementById("pallet_picked_mod");
    if (new_lot !== null) {
        let n_pick = new_picked.value;
        n_pick = n_pick.toLowerCase();
        n_pick = n_pick.trim();
        if (n_pick == "true") {
            pallet.picked = true;
        } else if (n_pick == "false") {
            pallet.picked = false;
        } else {
            alert("Picked was not changed do to not being in proper format. true or false only");
        }
        
    }
    let new_order_num = document.getElementById("pallet_order_num_mod");
    if (new_lot !== null) {
        pallet.Order_Num = new_order_num.value;
    }
    let temp = JSON.stringify(pallet);
    apiPost(endpoints.dev + urlEnd, temp)
    // $.ajax({
    //      type: "POST",
    //      url: "https://www.bcinvenstory.com/bciapi/post/pallet",
    //      data: temp,// now data come in this function
    //      contentType: "application/json; charset=utf-8",
    //      crossDomain: true,
    //      dataType: "json",
    //      success: function (data, status, jqXHR) {

    //          //alert("success");// write success in " "
    //      },

    //      error: function (jqXHR, status) {
    //          // error handler
    //          console.log(jqXHR);
    //          alert('fail' + status.code);
    //      }
    //  });
}