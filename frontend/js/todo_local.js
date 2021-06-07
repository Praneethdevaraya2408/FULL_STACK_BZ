$(document).ready(function(){
    var cnt=0;
    $(".add").click(function()
    {
        var inputval=$(".form-control").val();
        if(inputval !=""){
            cnt++;
           $(".todo-List").append('<li><div class="left-cont"><input type="checkbox" name="" id="check-'+cnt+'"><label for="check-'+cnt+'"></label><span>'+inputval+'</span></div><span class="remove"><i class="material-icons">delete</i></span></li>');
        }
        $(".form-control").val('');
    })
   $(document).on('click','.remove',function(){
       $(this).parent().remove();
   })


})