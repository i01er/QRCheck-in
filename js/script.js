// document.getElementById("QR").addEventListener("click", Change);

// function Change() {
//     document.getElementById("1").innerHTML = "Yo!";
// }

function onQRCodeScanned(scannedText)
    {
      var scannedTextMemo = document.getElementById("scannedTextMemo");
      if(scannedTextMemo)
      {
        scannedTextMemo.value = scannedText;

          if(scannedTextMemo.value == "Lavender")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth1 = scannedTextMemo.value;
                // document.getElementById("1").innerHTML = localStorage.Booth1;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Rose")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth2 = scannedTextMemo.value;
                // document.getElementById("2").innerHTML = localStorage.Booth2;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Jasmine")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth3 = scannedTextMemo.value;
                // document.getElementById("3").innerHTML = localStorage.Booth3;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Lily")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth4 = scannedTextMemo.value;
                // document.getElementById("4").innerHTML = localStorage.Booth4;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Sakura")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth5 = scannedTextMemo.value;
                // document.getElementById("5").innerHTML = localStorage.Booth5;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Tulip")
          {
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.Booth6 = scannedTextMemo.value;
                // document.getElementById("6").innerHTML = localStorage.Booth6;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("Notice").innerHTML = "Error";
            }
          }
      }
    }
  
    //this function will be called when JsQRScanner is ready to use
function JsQRScannerReady()
    {
        //create a new scanner passing to it a callback function that will be invoked when
        //the scanner succesfully scan a QR code
        var jbScanner = new JsQRScanner(onQRCodeScanned);
        //reduce the size of analyzed images to increase performance on mobile devices
        jbScanner.setSnapImageMaxSize(100);
      var scannerParentElement = document.getElementById("scanner");
      if(scannerParentElement)
      {
          //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
      }        
    }