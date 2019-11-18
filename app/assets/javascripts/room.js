$(function() {
  $('#form-send-msg').on('submit',function(e){
    e.preventDefault();
    var formData = $(this).serializeArray();
    var data = {
      room_message:{}
    }
    formData.forEach(e=>{
       if(e.name.includes("room_message")){
         data.room_message[`${e.name.replace(/room_message\[|\]/g,"")}`] = e.value
       }
       else{
         data[e.name] = e.value;
       }
    })
    console.log(data);
    $.ajax({
      url:$(this).attr("action"),
      type:"POST",
      contentType:"application/json",
      processData: false,
      data:JSON.stringify(data)
    })
    .done(data=>{
      $('#input-msg').val("");
      $.get(window.location.href,function(resText){
        var find = $('#chat',resText);
        if(find.length){
          console.log("Updated")
          $('#chat').replaceWith(find);
        }
      })
    })

  });

  $('#new_room_message').on('ajax:success', function(a, b,c ) {
    $(this).find('input[type="text"]').val('');
  });
});