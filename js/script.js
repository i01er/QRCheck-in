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
                document.getElementById("1").innerHTML = localStorage.Booth1;
            }
            else {
                // Sorry! No Web Storage support..
                document.getElementById("1").innerHTML = "Error";
            }
          }

          if(scannedTextMemo.value == "Rose")
          {
            document.getElementById("2").innerHTML = scannedTextMemo.value;
          }

          if(scannedTextMemo.value == "Jasmine")
          {
            document.getElementById("3").innerHTML = scannedTextMemo.value;
          }

          if(scannedTextMemo.value == "Lily")
          {
            document.getElementById("4").innerHTML = scannedTextMemo.value;
          }

          if(scannedTextMemo.value == "Sakura")
          {
            document.getElementById("5").innerHTML = scannedTextMemo.value;
          }

          if(scannedTextMemo.value == "Tulip")
          {
            document.getElementById("6").innerHTML = scannedTextMemo.value;
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
        jbScanner.setSnapImageMaxSize(300);
      var scannerParentElement = document.getElementById("scanner");
      if(scannerParentElement)
      {
          //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
      }        
    }