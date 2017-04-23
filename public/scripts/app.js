$(document).ready(function() {
  function createTweetElement(tweet) {
    let $tweet =
      `<article class="tweet-container">
                <header class="user"><img src="${tweet.user.avatars.small}">
                    <h2 class="name"> ${tweet.user.name}</h2>
                    <span class="handle"> ${tweet.user.handle} </span>
                </header>
                <section class="content">
                    <p class="message" >${tweet.content.text}</p>
                </section>
                <span class="tweet-footer">
                    <span class="created_at">${timeSince(tweet.created_at)}</span>
                    <i class="fa fa-flag" aria-hidden="true"></i>
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </span>
            </article>`
    return $tweet;
  }

  function renderTweets(tweets) {
    var result = "";
    tweets.forEach(function(tweet) {
      result = createTweetElement(tweet) + result
    })
    $('.tweet-area').html(result)
  };

  function loadTweets() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      data: {
        format: 'json'
      },
      success: function(data) {
        renderTweets(data);
      }
    })
  };
  loadTweets();
  $("#postarea").on("submit", function(event) {
    event.preventDefault();
    if ($("textarea").val() == "" || null) {
      alert('Say Something')
    }
    if ($("textarea").val().length > 140) {
      alert('Stahp')
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $('textarea').serialize(),
        success: function() {
          $('textarea').val('');
          $('span.counter').html('140');
          loadTweets();
        }
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
// Time since function
function timeSince(date) {
  console.log('got here' || date)
  var seconds = Math.floor((Date.now() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  console.log(seconds)
  return Math.floor(seconds) + " seconds";
}

// timeSince(Date.now())


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
