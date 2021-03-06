// ==========================================
// Global Variables (use sparingly)
// ==========================================

/*
 * Rather than actually performing a network request, we'll just store some
 * sample data in a tweets.json file. This simplifies development so we can
 * easily play around with different data and not rely on complicated
 * authentication mechanisms with actual servers.
 */
var tweetsResource = "data/tweets.json";

// ==========================================
// Helper Functions
// ==========================================

/*
 * Given two single-argument functions f and g, return f(g(x))
 */
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// ==========================================
// HTML Generation
// ==========================================

function li(content) {
    return "<li>" + content + "</li>";
}

function p(content) {
    return "<p>" + content +"</p>";
}

// ==========================================
// Fetch/Parse "Tweets"
// ==========================================

function tweetContent(tweet) {
    return tweet.text;
}

function loadTweets(cb) {
    $.ajax({
        url: tweetsResource,
        method: 'GET',
        success: cb
    });
}

// ==========================================
// DOM Manipulation
// ==========================================

var renderTweet = compose(li, tweetContent);

function prependTweet(tweet) {
    $("ul#tweets").prepend(renderTweet(tweet));
}

function postTweetHandler(e) {
    var tweetText = $("#tweet-text").val();
    var tweet = {text: tweetText};
    prependTweet(tweet);
    $("#tweet-text").val("");
}

$("#tweet-btn").click(postTweet);


$("input#load-tweets-btn").click(function(e) {
    var button = $( e.target );
    button.prop("value", "Loading...");
    loadTweets(function(tweets) {
        console.log(tweets);
        button.prop("value", "Refresh Tweets");
        $("ul#tweets").html(_.map(tweets, renderTweet));
    });
});
