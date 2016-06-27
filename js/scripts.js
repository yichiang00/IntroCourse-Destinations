//business logic
var Destination = function(places, landmarks, year, spending, friends , photo,note) {
  this.places = places;
  this.landmarks = landmarks;
  this.year = year;
  this.spending = spending;
  this.friends = friends;
  this.photo=photo;
  this.note=note;
}


//user-interface logic
$(document).ready(function(){
$("form#place-form").submit(function(event){
  event.preventDefault();
  var inputValue=["places", "landmarks", "year", "spending", "friends" , "photo","note"];
  var outputValue=[];
  inputValue.forEach(function(idName){
    outputValue.push( $("#"+idName).val());
  });
  var newPlace =new Destination(outputValue[0],outputValue[1],outputValue[2],outputValue[3],outputValue[4],outputValue[5],outputValue[6]);
  $("#output-first").append("<li class=\'contact\'> " + newPlace.places + "<img src=\"" + newPlace.photo + "\">"+"</li>");
  $(".contact").last().click(function(){
    $("#details").html(
      "<img src=\"" + newPlace.photo + "\">" +
      "<li>" + newPlace.places + "</li>" +
      "<li>" + newPlace.landmarks + "</li>" +
      "<li>" + newPlace.year + "</li>" +
      "<li>" + newPlace.spending + "</li>" +
      "<li>" + newPlace.friends + "</li>"+
        "<li>" + newPlace.note + "</li>"
    );
  });



});
});
