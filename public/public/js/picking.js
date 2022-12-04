import endpoints from "./modules/constants.js";
import {apiGet} from "./modules/crud.js";

// let endpoint = "https://www.bcinvenstory.com/bciapi/get/Orders";
let urlEnd = "get/Orders";

$(document).ready(function(){
    apiGet(endpoints.dev + urlEnd, fillData);
});

function fillData(data){
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');
        let h1 = document.createElement('th');
        let h2 = document.createElement('th');
        let h3 = document.createElement('th');
        let h4 = document.createElement('th');
        let h5 = document.createElement('th');
        let h5_button = document.createElement('button');
        h5_button.addEventListener('click', function(e) {
            window.location.href = 'https://bcinvenstory.com/html/pick.html?' + data[i].Order_Num;
        });
        h5_button.className += "button"
        h1.innerHTML = i+1;
        h2.innerHTML = data[i].Order_Num;
        h3.innerHTML = data[i].Client;
        h4.innerHTML = data[i].Due_Date;
        h5_button.innerHTML = 'pick';
        h5.appendChild(h5_button);
        row.appendChild(h1);
        row.appendChild(h2);
        row.appendChild(h3);
        row.appendChild(h4);
        row.appendChild(h5);
        document.getElementById('orderDisplay').appendChild(row);
    }
}