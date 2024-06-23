$(window).on("load", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      $("#id").text(data["slip"]["id"]);
      $("#advice").text(data["slip"]["advice"]);
    });
});

$("#button").click(function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      $("#id").text(data["slip"]["id"]);
      $("#advice").text(data["slip"]["advice"]);
    });
});
