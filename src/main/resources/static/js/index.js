function getContextPath() {
    return "/" + document.location.toString().split("/")[3];
}
function setDownloadStatusCookie(value) {
    document.cookie = "status-index-html-done="+value+"; SameSite=Strict; Path=" + getContextPath();
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
