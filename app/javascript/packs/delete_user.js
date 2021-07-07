$(document).ready(function () {
    $(".delete-button").click(function () {
        let user_id = parseInt($($(this).parent().siblings()[4]).text());
        let name = $($(this).parent().siblings()[1]).text();
        let email = $($(this).parent().siblings()[2]).text();
        let address = $($(this).parent().siblings()[3]).text();
        let el = $(this).parent().parent().children();
        $.ajax({
            url: "/users/" + user_id,
            type: "DELETE",
            data: {
                user: {
                    name: name,
                    email: email,
                    address: address
                }
            },
            success: function (data) {
                el.remove();
            },
            error: function (data) {
                alert("Lỗi rồi ông tướng ơi!");
            }
        });
    });
});