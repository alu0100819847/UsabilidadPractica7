var a;
$(document).ready(function(a){

   $("#enlaceajax").click(function(evento){
      evento.preventDefault();
	var num= n.value;
	$.get("https://jsonplaceholder.typicode.com/comments?postId=1&id="+num, function(data, status) {
	console.log(data[0].email);
      $("div[id=destino]").html("<p>"+data[0].email+"</p>")
	});


   });
})
