var request = new XMLHttpRequest();

request.open(
  'GET',
  'https://api.giphy.com/v1/gifs/random?api_key=Q7ap4sv9ji60fItR5p4GTYxIoDNwU4HV&tag=alien'
);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
  var originalUrl = parsedData.data.images.original.url;
  console.log(originalUrl);

  var gif = document.createElement('img');
  gif.setAttribute('src', originalUrl);
  document.getElementById('random').appendChild(gif);
  // above line is crucial and how I got the api gif into the div of the index page
};

request.onerror = function () {
  console.log('There is a big prob');
};

request.send();
