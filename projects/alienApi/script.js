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
  document.body.appendChild(gif);
};

request.onerror = function () {
  console.log('There is a big prob');
};

request.send();
