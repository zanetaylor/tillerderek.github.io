function refreshPage() {
  window.location.reload();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
  document.getElementById('div2').innerHTML =
    'great job click down here to go home &#x2b07;';
}

(() => {
  const message = document.querySelector('#message');

  // check if the Geolocation API is supported
  if (!navigator.geolocation) {
    message.textContent = `Your browser doesn't support Geolocation`;
    message.classList.add('error');
    return;
  }

  // handle click event
  const btn = document.querySelector('#show');
  btn.addEventListener('click', function () {
    // get the current position
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  // handle success case
  function onSuccess(position) {
    const { latitude, longitude } = position.coords;

    message.classList.add('success');
    message.textContent = `Your location: (${latitude},${longitude})  Scroll on In`;
  }

  // handle error case
  function onError() {
    message.classList.add('error');
    message.textContent = `Failed to get your location!`;
  }
})();

function clickCounter() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById('result').innerHTML =
      'You have pet the dog ' + localStorage.clickcount + ' time(s).';
  } else {
    document.getElementById('result').innerHTML =
      'Sorry, your browser does not support web storage...';
  }
};

function showDiv() {
  document.getElementById('fbPage').style.display = 'block';
};

function myFunction() {
  document.getElementById('map').style.display = 'block';
};
