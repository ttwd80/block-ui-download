$(document).ready(function () {
  console.log("yes?");
  Cookies.set("status-index-html-done", "none");
});

function block() {
  //$.blockUI({ message: "<h1>Just a moment...</h1>" });
  Cookies.set("status-index-html-done", "submit");
  start_poll();
}

function start_poll() {
  console.log("cookie value = " + Cookies.get("status-index-html-done"));
  if (Cookies.get("status-index-html-done") == "submit") {
    $.blockUI({ message: "<h1>Just a moment...</h1>" });
    Cookies.set("status-index-html-done", "process");
    console.log("using poll");
    setTimeout(start_poll, 250);
  } else if (Cookies.get("status-index-html-done") == "process") {
    setTimeout(start_poll, 250);
  } else if (Cookies.get("status-index-html-done") == "done") {
    $.unblockUI();
  }
}
