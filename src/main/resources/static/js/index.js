$(document).ready(function () {
  Cookies.set("status-index-html-done", "none");
});

function block() {
  Cookies.set("status-index-html-done", "submit");
  start_poll();
}

function start_poll() {
  var timeout = 500;
  var key = "status-index-html-done";
  if (Cookies.get(key) == "submit") {
    $.blockUI({ message: "<h1>Just a moment...</h1>" });
    Cookies.set(key, "process");
    setTimeout(start_poll, timeout);
  } else if (Cookies.get(key) == "process") {
    setTimeout(start_poll, timeout);
  } else if (Cookies.get(key) == "done") {
    Cookies.set("status-index-html-done", "none");
    $.unblockUI();
  }
}
