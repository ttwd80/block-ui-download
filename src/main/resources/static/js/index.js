function getCorrectCookiePath() {
  return "/" + document.location.toString().split("/")[3];
}
function getCorrectCookieString(value) {
  var key = "status-index-html-done";
  var cookie = key + "=" + value;
  cookie = cookie + "; ";
  cookie = cookie + "SameSite=Strict";
  cookie = cookie + "; ";
  cookie = cookie + "Path=" + getCorrectCookiePath();
  return cookie;
}
function setDownloadStatusCookie(value) {
  document.cookie = getCorrectCookieString(value);
}
$(document).ready(function () {
  setDownloadStatusCookie("none");
});

function block() {
  setDownloadStatusCookie("submit");
  start_poll();
}

function start_poll() {
  var timeout = 500;
  var key = "status-index-html-done";
  if (Cookies.get(key) == "submit") {
    $.blockUI({ message: "<h1>Just a moment...</h1>" });
    setDownloadStatusCookie("process");
    setTimeout(start_poll, timeout);
  } else if (Cookies.get(key) == "process") {
    setTimeout(start_poll, timeout);
  } else if (Cookies.get(key) == "done") {
    setDownloadStatusCookie("none");
    $.unblockUI();
  }
}
