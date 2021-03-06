$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addColorDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('color-dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addBreakDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('break-dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    var screenWidth = screen.width;
    var dancers = $('img');
    var dancersPosition = screenWidth / dancers.length;
    window.dancers.push(dancers);
    for (let i = 0; i < dancers.length; i++) {
      let dancer = dancers[i];
      dancer.style.top = '300px';
      dancer.style.left = dancersPosition * i + 'px';
    }
  });

  $('.random').on('click', function(event) {
    var dancers = $('img');
    for (let i = 0; i < dancers.length; i++) {
      let dancer = dancers[i];
      dancer.style.top = $('body').height() * Math.random() + 'px';
      dancer.style.left = $('body').width() * Math.random() + 'px';
    }
  });
});









