// $(function() {
//   scrolltoBottom();
//   $('#form-send-msg').on('submit',function(e){
//     e.preventDefault();
//     var currentScrollTop = $("#chat").scrollTop();
//     var formData = $(this).serializeArray();
//     var data = {
//       room_message:{}
//     }
//     formData.forEach(e=>{
//        if(e.name.includes("room_message")){
//          data.room_message[`${e.name.replace(/room_message\[|\]/g,"")}`] = e.value
//        }
//        else{
//          data[e.name] = e.value;
//        }
//     })
//     console.log(data);
//     $.ajax({
//       url:$(this).attr("action"),
//       type:"POST",
//       contentType:"application/json",
//       processData: false,
//       data:JSON.stringify(data)
//     })
//     .done(data=>{
//       $('#input-msg').val("");
//       $.get(window.location.href,function(resText){
//         var find = $('.room-msg-row[id^=msg-]',resText).last();
//         if(find.length){
//           console.log("Updated")
//           $('#chat').append(find);
//           console.log(`Current: ${$("#chat").scrollTop()}`)
//           UpdateScroll(currentScrollTop);
//         }
//         else{
//           console.log("No updates")
//         }
//       })
//     })

//   });

//   $('#new_room_message').on('ajax:success', function(a, b,c ) {
//     $(this).find('input[type="text"]').val('');
//   });
// });
// function scrolltoBottom(){
//   var totalScrollHeight = $("#chat")[0].scrollHeight;
//   var divHeight = $("#chat").height();
//   var toHeight = totalScrollHeight - divHeight;
//   // console.log(`${totalScrollHeight} - ${divHeight} = ${totalScrollHeight-divHeight}`)
//   // console.log(`set to: ${toHeight}`)
//   $("#chat").animate({
//     scrollTop: `${toHeight}px`
//   },function(){
//     // console.log("scrolled");
//   })
// }
// function UpdateScroll(currentScrollTop=0){
//   $("#chat").animate({
//     scrollTop: `${currentScrollTop+80}px`
//   },function(){
//     // console.log("scrolled");
//   })
// }