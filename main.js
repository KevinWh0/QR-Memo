var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250,
});
var lastScan = "";
function onScanSuccess(qrCodeMessage) {
  // handle on success condition with the decoded message
  //html5QrcodeScanner.clear();
  if (localStorage.getItem(qrCodeMessage) == null) {
    //It does not exits
    lastScan = qrCodeMessage;
  } else {
    //alert(localStorage.getItem(qrCodeMessage));
    document.getElementById("text").value = localStorage.getItem(qrCodeMessage);
  }

  document.getElementById("setText").hidden = false;
  document.getElementById("text").hidden = false;
  //localStorage.setItem("lastname", "Smith");

  // ^ this will stop the scanner (video feed) and clear the scan area.
}

function onScanError(errorMessage) {
  // handle on error condition, with error message
}

html5QrcodeScanner.render(onScanSuccess);
document.getElementById("setText").hidden = true;
document.getElementById("text").hidden = true;

document.getElementById("setText").addEventListener("click", function () {
  //alert(document.getElementById("text").value);

  if (lastScan != "") {
    localStorage.setItem(lastScan, document.getElementById("text").value);
    lastScan = "";
  }
});
