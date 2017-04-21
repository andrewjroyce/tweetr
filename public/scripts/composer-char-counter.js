var max = 140;
var length = 0; 
$(document).ready(function() {
    $('textarea#tweetbox').on('keyup', (function(event) {
	    length = $(this).val().length;
	    var charCount = max - length; $('span.counter').html(charCount);
	    var el = $('span.counter')
        if(length < max) {
            el.css('color', 'green');
        } if(length > max ) {
         el.css('color', 'red');
        }
	}))

})

// $(document).ready(function() {
// 	$('#textarea').on('keyup',(function(){		
//     var keyed = $(this).val().length; console.log(keyed)})
// )})

// $(document).ready(function() {
// 	$('textarea').on('keyup',(function(){		
//     var keyed = $(this).val().length; console.log(keyed)})
// )})

// $(document).ready(function() {
// 	$('#.textarea').on('keyup',(function(){		
//     var keyed = $(this).val().length; console.log(keyed)})
// )})





// $(someTextInputField).on('input', function() {
//   alert($(this).val());
// });
// var $this = $(this);
//     if (this.value !== $this.data("oldValue")) {
//         // Do something

//         $this.data("oldValue", this.value);
// if( $('textarea').is(":visible") ){
//         var max = $('textarea').attr("maxlength");
//         var len = $('textarea').val().length;
//         var char = max - len;
//       if (len >= max) {
//             $('#charCount').text('You have reached the maximum number of characters.');
//         }else if ( (max - len) == 1) {
//             $('#charCount').text( char + ' char left');
//         }else{
//             $('#charCount').text( char + ' chars left');
//         }
//     }


// '$.this'
// $(function(){
//     $('#textAreaPost').keyup(function(){
//       var charsno = $(this).val().length;
//       $('#char_namb').html("500 : " + charsno);
//     });
// });

    // or textinput, or keydown, or keyup
    // target.addEventListener(type, listener[, options]);

//     setInterval(function(){

//     if( $('textarea').is(":visible") ){
//         var max = $('textarea').attr("maxlength");
//         var len = $('textarea').val().length;
//         var char = max - len;

//         if (len >= max) {
//             $('#charCount').text('You have reached the maximum number of characters.');
//         }else if ( (max - len) == 1) {
//             $('#charCount').text( char + ' char left');
//         }else{
//             $('#charCount').text( char + ' chars left');
//         }
//     }

// }

// var count = 0;

// $("#add").on("click" , function() { 
//     count = count + 1;
//     $("#question").text(count);
// });

// $("#delete").on("click" , function() { 
//     if(count > 0) {
//       count = count - 1;
//       $("#question").text(count);
//     }
// });