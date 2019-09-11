$("#btnRegister").click(function () {
    console.log("sdfsdfdsfdsfdsf");
    var formData=$("#custForm").serialize();
    console.log(formData)
    // $.ajax({
    //     url:"../api/service/CustomerService.php",
    //     method:"post",
    //     async:true,
    //     data:formData+"&operation=saveCust"
    // }).done(function (res) {
    //     alert(res);
    // })
});

// $("#btnUpdate").click(function () {
//     var formData=$("#custForm").serialize();
//     $.ajax({
//         url:"../api/service/CustomerService.php",
//         method:"post",
//         async:true,
//         data:formData+"&operation=updateCust"
//     }).done(function (res) {
//         alert(res);
//     })
// });
//
// $("#btnDelete").click(function () {
//     var formData=$("#custForm").serialize();
//     $.ajax({
//         url:"../api/service/CustomerService.php",
//         method:"post",
//         async:true,
//         data:formData+"&operation=deleteCust"
//     }).done(function (res) {
//         alert(res);
//     })
// });
//
// function getAllCustomers() {
//
//     $('#customerTable').empty();
//
//     $.ajax({
//         url:"../api/service/CustomerService.php",
//         method:"GET",
//         async:true,
//         dataType:'json',
//         data: "&operation=getAllCustomers"
//     }).done(function (res) {
//         console.log(res);
//
//         for(var i in res){
//             var customer = res[i];
//             var customerId = customer[0];
//             var customerName = customer[1];
//             var customerAddress = customer[2];
//             var customerSalary = customer[3];
//
//             var tableRow = " <tr>\n" +
//                 "                    <td scope=\"row\">"+customerId+"</td>\n" +
//                 "                    <td class='bg-secondary'>"+customerName+"</td>\n" +
//                 "                    <td>"+customerAddress+"</td>\n" +
//                 "                    <td>"+customerSalary+"</td>\n" +
//                 "                </tr>";
//
//
//             $('#customerTable').append(tableRow);
//
//         }
//     });
//
// }
//
// getAllCustomers();
//
