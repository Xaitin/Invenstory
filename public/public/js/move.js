import endpoints from "./modules/constants.js";
import {apiGet, apiPost} from "./modules/crud.js";


document.getElementById("loc_get").onclick = moveGetPallet;
document.getElementById("new_loc_butt").onclick = moveSubmitPallet;

let pallet;

function moveGetPallet(){
    let urlEnd = "get/Pallet?lp=";
    urlEnd += document.getElementById("licence_no_input").value;
    apiGet(endpoints.dev + urlEnd, fillData);
    // $.get("https://bcinvenstory.com/bciapi/get/Pallet?lp=" + plate_no, function(data, status){
    //     data = data[0];
    //     pallet = data;
    //     console.log(data);
    //     document.getElementById("pallet_location").innerHTML = data.Location;
    // });
} 

function fillData(data){
    data = data[0];
    pallet = data;
    console.log(data);
    document.getElementById("pallet_location").innerHTML = data.Location;
}

function moveSubmitPallet(){
    let urlEnd = "post/Pallet"
    pallet.Location = document.getElementById("new_location").value;
    let temp = JSON.stringify(pallet);
    console.log(pallet);
    console.log(temp);
    apiPost(endpoints.dev + urlEnd, temp)
    // $.ajax({
    //      type: "POST",
    //      url: "https://www.bcinvenstory.com/bciapi/post/Pallet",
    //      data: temp,// now data come in this function
    //      contentType: "application/json; charset=utf-8",
    //      crossDomain: true,
    //      dataType: "json",
    //      success: function (data, status, jqXHR) {

    //          alert("success");// write success in " "
    //      },

    //      error: function (jqXHR, status) {
    //          // error handler
    //          console.log(jqXHR);
    //          alert('fail' + status.code);
    //      }
    //  });
} 