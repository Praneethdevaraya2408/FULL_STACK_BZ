$(function(){
    console.log('jquery running')
    var Loggedin=false
    if(Loggedin){
        $('#notsignedin').hide()
        $('#signedin').show()
    }
    else{
        $('#notsignedin').show()
        $('#signedin').hide()
    }
})
$("#btnLogin").on('click', function(){
    var userObj = {username: '', password:''};
    userObj.username = $("#txtuname").val();
    userObj.password = $("#txtpassword").val();
    $.post( "/api/login", userObj)
    .done(function( data ) {
        alert( "Data Loaded: " + JSON.stringify(data) );
        if(data.success){
            toastr.success('Login Successful');
            // front end session management
            $("#signedin").show();
            $("#notsignedin").hide();
        }
        else{
            toastr.success('Login Failed');
        }
    })
    .fail(function() {
        //alert( "error" );
    })
    .always(function() {
        //alert( "finished" );
    });
})