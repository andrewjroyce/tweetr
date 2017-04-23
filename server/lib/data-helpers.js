"use strict";
// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
    return {
      saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
      },
      getTweets: function(callback) {
        db.collection("tweets").find().toArray((err, results) => {
            if (err) return callback(err);
            const sortNewestFirst = (a, b) => a.created_at - b.created_at;
            callback(null, results.sort(sortNewestFirst));
            })
          }
        }
}
timeSince
function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
  return(timeSince(new Date(Date.now())));
}
// var aDay = 24*60*60*1000
