function checkCookies() {
  if (!document.cookie) {
    window.location.href = "../index.html";
  }
  //   window.location.href = "./okdashboard/dashboard.html";
  return;
}
checkCookies();
