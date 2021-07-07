$(document).ready(function () {
    $('button[class="btn btn-danger add_user"]').click(function () {
        let name = $($($(this).parent().siblings()[1]).children("input")[0]).val();
        let email = $($($(this).parent().siblings()[1]).children("input")[1]).val();
        let address = $($($(this).parent().siblings()[1]).children("input")[2]).val();
        $.ajax({
            url: "/users",
            type: "POST",
            data: {
                user: {
                    name: name,
                    email: email,
                    address: address
                }
            },
            success: function (data) {
                $("#table_user").append("<tr>"+
                    "<th scope='row'>" + data.count + "</th>"+
                    "<td>"+data.user.name+"</td>"+
                    "<td>"+data.user.email+"</td>"+
                    "<td>"+data.user.address+"</td>"+
                    "<td><i className='fas fa-edit'></i><i className='fas fa-trash-alt'></i></td>"+
                    "</tr>");
            },
            error: function (data) {
                alert("Phat sinh loi gi do!");
            }
        });
    });
});