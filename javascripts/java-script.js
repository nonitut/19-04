// $(document).ready(function () {
//   let week;
//   let name_of;
//   let date;
//   let disc;
//   let type;
//   let next_row;
//   $("#new_row button").click(function () {
//     week = $("input[name='week']").val(); // метод val() достает знаечение из елемента select
//     name_of = $("input[name='name_of']").val();
//     date = $("input[name='date']").val();
//     disc = $("input[name='disc']").val();
//     type = $("input[name='type']").val();
//     next_row = '<tr><td>'+week+'</td><td>'+name_of+'</td><td>'+date+'</td><td><span class"sp_red">'+disk+'</span></td><td><span class+"sp_green">'+type+'</span></td><td></td></tr>'
//     $("table tbody tr:last-child").after(next_row);
//     $(".test").html(week+','+name_of+','+date+','+disc+','+type);
//     $("#new_row input").val("")
//   })
//
// })

$(document).ready(function() {
       let week;
       let name_of;
       let date;
       let disc;
       let type;
       let next_row;
       $("#new_row button").click(function() {
         week = $("input[name='week']").val();
         name_of = $("input[name='name_of']").val();
         date = $("input[name='date']").val();
         disc = $("select[name='disc']").val();
         type = $("select[name='type']").val();

         next_row = '<tr><td>'+week+'</td><td>'+name_of+'</td><td>'+date+'</td><td><span class="sp_red">'+disc+'</span></td><td><span class="sp_green">'+type+'</span></td><td></td></tr>'
         $("table tbody tr:last-child").after(next_row);

         $(".test").html(week+', '+name_of+', '+date+', '+disc+', '+type);
         // $("input[name='week'], input[name='name_of'], input[name='date'],select[name='disc'],select[name='type']").val("");
         $("#new_row input").val("");



       })
     });
