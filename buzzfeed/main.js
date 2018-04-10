/* Lab 2 - Buzzfeed
Chaeyoon Kim
April 9, 2018 */

$(document).ready(function() {

    $("input[name='first_cats']").click(function() {
      $('input[name="first_cats"]:not(:checked) + label').fadeTo('slow', 0.45);
      $('input[name="first_cats"]:checked + label').fadeTo('slow', 1.0);
    });

    $("input[name='second_cats']").click(function() {
      $('input[name="second_cats"]:not(:checked) + label').fadeTo('slow', 0.45);
      $('input[name="second_cats"]:checked + label').fadeTo('slow', 1.0);
    });

    $("input[name='text_answer']").click(function() {
      $('input[name="text_answer"]:not(:checked) + label').fadeTo('slow', 0.45);
      $('input[name="text_answer"]:checked + label').fadeTo('slow', 1.0);
    });

    $("input[name='cat_heads']").click(function() {
      $('input[name="cat_heads"]:not(:checked) + label').fadeTo('slow', 0.45);
      $('input[name="cat_heads"]:checked + label').fadeTo('slow', 1.0);
    });

    $("input[name='alcoholic_cat']").click(function() {
      $('input[name="alcoholic_cat"]:not(:checked) + label').fadeTo('slow', 0.45);
      $('input[name="alcoholic_cat"]:checked + label').fadeTo('slow', 1.0);
    });

  var resultOptions = [
      {   account: 'textsfromyourex',
          title: '@textsfromyourex',
          desc: '<p>Broke up with a psycho ex recently? Follow this account.</p>',
          image: '<img src="images/textsfromyourex.jpg"/>'},
      {   account: 'textsfromyourexistentialist',
          title: '@textsfromyourexistentialist',
          desc: '<p>Confused about the purpose of life? Follow this account.</p>',
          image: '<img src="images/textsfromyourexistentialist.jpg"/>'},
      {   account: 'betches',
          title: '@betches',
          desc: '<p>Your preferences in cats embody this account. Follow it.</p>',
          image: '<img src="images/betches.jpg"/>'},
      {   account: 'quarterlifepoetry',
          title: '@quarterlifepoetry',
          desc: '<p>Old and lonely? Follow this account.</p>',
          image: '<img src="images/quarterlifepoetry.jpg"/>'},
      {   account: 'tinygentleasians',
          title: '@tinygentleasians',
          desc: '<p>Want to see more cute things like tiny Asian babies? Follow this account.</p>',
          image: '<img src="images/tinygentleasians.jpg"/>'},
      {   account: 'cashcats',
          title: '@cashcats',
          desc: '<p>You like cats and you like money. Follow this account.</p>',
          image: '<img src="images/cashcats.jpg"/>'}
  ];

  $('#done').on('click', function(e) {

    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

  if (choices.length<5){
    alert ("You must answer all of the questions!");
  }

  else {
    var scores = { textsfromyourex:0 , textsfromyourexistentialist:0 , betches:0 , quarterlifepoetry:0 , tinygentleasians:0 , cashcats:0 };
    jQuery.each( choices, function( i, val ) {
      scores[String(val)] ++;
    });

    var max = -Infinity, account, max_account;
    for( account in scores) {
      if( scores[account] > max) {
        max = scores[account];
        max_account = account;

        $.each(resultOptions,function(i, val){
            if (val.account === max_account) {
              $("#result-text").html(val.title);
              $("#modal-text").html(val.desc);
              $("#insta-image").html(val.image);
            }
        });
      }
    }
    modal.style.display = "block";
  }
    e.preventDefault();
  });

  // Modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("done-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

});
