$(document).ready(function(){


 change_up(index){
    $('.bg').css('background-image', 'url('+ images[index] + ')')
  };
});


var images = [

  '../img/1.jpg',
  '../img/2.jpg',
];

setInterval(change_up(1), 1000);
setInterval(change_up(2), 2000);

 