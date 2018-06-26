  let myArray = [];
$('#go').on('click', function(){


        $('.game > .card').each(function(){
            myArray.push(this);
            shuffle(myArray)
        })

        function shuffle(a) {
          var j, x, i;
          for (i = myArray.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              x = a[i];
              myArray[i] = myArray[j];
              myArray[j] = x;
          }
          return myArray;
        }
        $('section').html(myArray)
        console.log(myArray);
})

const game = {

  checkIfMatch: function(){
    if( $('.selected').eq(0).attr('class') ==  $('.selected').eq(1).attr('class')  ){
      $('.selected').addClass('matched').removeClass('selected')
    }else{
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if( $('.card').length == $('.matched').length ){
      alert('GAME OVER')
    }
  }
}
$('.card').on('click', function(){
  $(this).toggleClass('selected')
  if($('.selected').length == 2){
    game.checkIfMatch()
  }
  game.checkEnd()
})
