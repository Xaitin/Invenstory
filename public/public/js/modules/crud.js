export function apiGet(endpoint, successFunc){
    $.get(endpoint, function(data, status){
        successFunc(data, status);
    });
}

export function apiPost(endpoint, postData, successFunc=successDefault, failFunc=failDefault){
    $.ajax({
        type: "POST",
        url: endpoint,
        data: postData,
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
            successFunc(data, status, jqXHR);
        },
        error: function (jqXHR, status) {
            failFunc(jqXHR, status);
        }
    });
}

function successDefault(data, status, jqXHR){
    // alert("successful post");
}

function failDefault(jqXHR, status){
    console.log(jqXHR);
    alert('post failed: ' + status.code);
}
