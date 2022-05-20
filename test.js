
var url = "https://ex1.o7planning.com/_testdatas_/simple-text-data.txt";


function doGetTEXT()  {

  // Call fetch(url) with default options.
  // It returns a Promise object (Resolve response object)
  var aPromise = fetch(url,{ mode: 'no-cors'});

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        document.getElementById('rs').innerHTML = response
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        // Network Error!
        console.log(error);
    });

}
doGetTEXT()
