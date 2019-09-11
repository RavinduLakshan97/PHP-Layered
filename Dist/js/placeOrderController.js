//load All Customer ID to combobox
function loadCustomerID() {

    $("#custID").empty();
    $.ajax({
        url: "../api/service/CustomerService.php",
        method: "GET",
        async: true,
        dataType: "json",
        data: "&operation=getAllCustomers"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            var row = "<option>" + temp[0] + "<option>";
            $('#custID').append(row);
        }
    });

};
loadCustomerID();
//add customer data to text fields

$("#custID").click(function () {
    $.ajax({
        url: "../api/service/CustomerService.php",
        method: "GET",
        async: true,
        dataType: "json",
        data: "&operation=getAllCustomers"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            if ($("#custID").val() == temp[0]) {
                $('#custName').val(temp[1]);
            }
        }
    });
});

//load All item code to combobox
function loadItemCode() {
    $("#itemCode").empty();
    $.ajax({
        url: "../api/service/ItemService.php",
        method: "GET",
        async: true,
        dataType: "json",
        data: "&operation=getAllItems"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            var row = "<option>" + temp[0] + "<option>";
            $("#itemCode").append(row);
        }
    });

};
loadItemCode();
//add customer data to text fields

$("#itemCode").click(function () {
    $.ajax({
        url: "../api/service/ItemService.php",
        method: "GET",
        async: true,
        dataType: "json",
        data: "&operation=getAllItems"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            if ($("#itemCode").val() == temp[0]) {
                $("#itemName").val(temp[1]);
                $("#unitPrice").val(temp[2]);
                $("#qtyonhand").val(temp[3]);
            }
        }
    });
});
//add data to the cart
let array = new Array();
$("#btnaddcart").click(function () {
    let itemCode = $("#itemCode").val();
    let itemName = $("#itemName").val();
    let orderQty = $("#Orderedqty").val();
    let unitPrice = $("#unitPrice").val();
    let amount = orderQty * unitPrice;
    array.push(new Array({itemCode,itemName,orderQty,unitPrice,amount}));

    var row = "<tr><td>" +itemCode + "</td><td>" + itemName + "</td><td>" + orderQty + "</td><td>" + unitPrice +
        "</td><td>" + amount + "</td></tr>";
    $("#cartTable").append(row);
});
//delete Cart Order

$('#btndelete').click(function () {
    console.log(array);
    for (var i in array){
        var temp=array[i] ;
        for (var row in temp){
            let val=temp[row];
            alert(val[1]);
        }
    }
});
