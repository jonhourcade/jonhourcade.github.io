var visitor;

$(document).ready(() => {
  addFormListeners();

  getRecentTweets();
  setInterval(() => getRecentTweets(), 20000);
});

const getTime = date => {
  let templateText;

  const minutes = new Date().getMinutes() - date.getMinutes();
  if (minutes) {
    templateText = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
  }
  else {
    const seconds = new Date().getSeconds() - date.getSeconds();
    templateText = `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
  }

  return `posted ${templateText} ago`;
}

const getTime2 = date => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const hours = date.getHours();
  const isAm = hours < 12;

  const minutes = date.getMinutes();
  const addZero = minutes < 10;

  return `
    ${days[date.getDay()]} at ${isAm ? hours : hours === 12 ? hours : hours - 12}:${addZero ? `0${minutes}` : minutes} ${isAm ? "AM" : "PM"}
  `;
}

const addSpans = (words, newHtml = "") => {
  if (words.length === 0) return newHtml.trim();
  if (words[0][0] === "#")
    newHtml += `<span class="hashtag">${words[0]}</span> `;
  else newHtml += `${words[0]} `
  return addSpans(words.slice(1), newHtml);
}

const getUserTweets = user => {
  const section = $("#userSpecific");

  $("h2", section).text(`@${user}`);

  const tweets = [...streams.home].reverse();
  const lis = tweets
    .filter(tweet => {
      return user === tweet.user;
    })
    .map((tweet, index) => {
      if (index < 8) {
        const p1 = $("<p>")
          .html(addSpans(tweet.message.split(" ")));

        const p2 = $("<p>")
          .text(getTime2(tweet.created_at))
          .addClass("userSpecificDate");

        const div = $("<div>")
          .addClass("userSpecificTweet");
        div.append(p1);
        div.append(p2);

        return div;
      }
    });
  $("ul", section).html(lis);
  addSpanListeners();
}

const getHashtagTweets = hashtag => {
  const section = $("#userSpecific");

  $("h2", section).text(hashtag);

  const tweets = [...streams.home].reverse();
  const lis = tweets
    .filter(tweet => {
      return tweet.message.includes(hashtag);
    })
    .map((tweet, index) => {
      if (index < 8) {
        const p1 = $("<p>")
          .text(tweet.message);

        const p2 = $("<p>");
        p2.html(`${getTime2(tweet.created_at)} by <span class="user2">${tweet.user}<span>`)
          .addClass("userSpecificDate")

        const div = $("<div>")
          .addClass("userSpecificTweet");
        div.append(p1);
        div.append(p2);

        return div;
      }
    });
  $("ul", section).html(lis);
  addSpanListeners2();
}

const getRecentTweets = () => {
  const tweets = [...streams.home].reverse();
  const lis = tweets
    .map((tweet, index) => {
      if (index < 8) {
        const span1 = $("<span>")
          .addClass("user")
          .text(`@${tweet.user} `)
          .click(() => getUserTweets(tweet.user));

        const span2 = $("<span>")
          .addClass("created_at")
          .text(tweet.created_at instanceof Date && `${getTime(tweet.created_at)} `);

        const p1 = $("<p>")
          .addClass("tag");
        p1.append(span1);
        p1.append(span2);

        const p2 = $("<p>")
          .addClass("message")
          .html(addSpans(tweet.message.split(" ")));

        const div = $("<div>")
          .addClass("tweet");
        div.append(p1);
        div.append(p2);

        return div;
      }
    });
  $("ul", $("#recent")).html(lis);
  addSpanListeners();
}

const addLoginFormListener = () => {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();
    const visitorValue = $("#username").val();
    if (!visitorValue) return;
    visitor = $("#username").val();

    $("#loginForm").hide();

    $("#welcomeMessageUser").text(visitor);
    $("#welcomeMessageUser").click(function () {
      getUserTweets($(this)[0].innerText);
    });
    $("#logoutForm").show();

    $("#newTweetSection").show();
  });
};

const addNewTweetFormListener = () => {
  $("#newTweetForm").on("submit", function (event) {
    event.preventDefault();
    writeTweet($("#newTweetContent").val());
    $("#newTweetContent").val("");
    getRecentTweets();
  });
}

const addLogoutFormListener = () => {
  $("#logoutForm").on("submit", function (event) {
    event.preventDefault();
    visitor = null;
    $("#logoutForm").hide();
    $("#username").val("");
    $("#loginForm").show();
    $("#newTweetSection").hide();
  });
};

const addFormListeners = () => {
  addLoginFormListener();
  addNewTweetFormListener();
  addLogoutFormListener();
};

const addSpanListeners = () => {
  $(".hashtag").click(function () {
    getHashtagTweets($(this)[0].innerText);
  });
};

const addSpanListeners2 = () => {
  $(".user2").click(function () {
    getUserTweets($(this)[0].innerText);
  });
};