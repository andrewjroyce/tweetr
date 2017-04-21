$(document).ready(function(){
function createTweetElement(tweet) {
let $tweet = 
`<section class="tweet-area">
            <article class="tweet-container">
                <header class="user"><img src="${tweet.user.avatars.small}">
                    <span class="name"> ${tweet.user.name}</span>
                    <span class="handle"> ${tweet.user.handle} </span>
                </header>
                <section class="content">
                    <span >${tweet.content.text}</span>
                </section>
                <footer class="tweet-footer">
                    <span>${tweet.created_at}</span>
                </footer>
            </article>
        </section>`
return $tweet;
}

function renderTweets(tweets){
  var result = "";
  tweets.forEach(function(tweet){
  result = createTweetElement(tweet) + result 
  })
  $('.tweet-container').html(result)
};

function loadTweets(){
  $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      data: {
        format: 'json'
        },
      success: function(data){renderTweets(data);}
    })
};
loadTweets();

$("#postarea").on("submit", function(event) {
  event.preventDefault();
  if ($("textarea").val() == "" || null) {alert('Say Something')
  }  if ($("textarea").val().length > 140 ) {alert('Stahp')
    }
    else{
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $('textarea').serialize(), 
      success: loadTweets
    });
  }
});
$(".new-tweet").hide();
$(".compose").click(function(e) {
    $(".new-tweet").slideToggle();
    $("#tweetbox").focus().select();
    e.preventDefault();
});
});

// onFocus="this.select()"



//   console.log('result' ||tweet)
// var newest = renderTweets(tweet)
// $('.tweet-container').load('/index.html .tweet-container')







    // $.ajax({
    //   url: 'http://localhost:8080/tweets',
    //   method: 'GET',
    //   data: {
    //     format: 'json'
    //     },
    //   success: renderTweets
    // })