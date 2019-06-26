
$(document).ready(function(){


$("#add").click(function(){
var money_given=$("#moneyg").val();
var qnty=$("#qnty").val();
var price=$("#price").val();


var ukupno=parseInt(qnty) * parseInt(price);

$("#total").text("Ukupno: "+parseInt(ukupno)+"Din");


var kusur=parseInt(money_given) - parseInt(ukupno);

$("#return").text("Kusur: "+parseInt(kusur)+"Din");


});


$("input").focusin(function(){

money_given=$("#moneyg").val("");
qnty=$("#qnty").val("");
price=$("#price").val("");
qnty=$("#total").val("");

})


$("#reset").click(function(){





var money_given=$("#moneyg").val();
var qnty=$("#qnty").val();
var price=$("#price").val();
var qnty=$("#total").val();
var price=$("#return").val();

money_given=$("#moneyg").val("");
qnty=$("#qnty").val("");
price=$("#price").val("");
qnty=$("#total").val("");
 price=$("#return").val("");

 
 
 $("#total").text("Ukupno: ");

$("#return").text("Kusur: ");

});




});
