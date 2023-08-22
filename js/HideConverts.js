const IDS_CONVERTS = [
  ".binary-to-deci",
  ".hex-to-deci",
  ".porcentaje-to-deci",
  ".octa-to-deci",
];

$(document).ready(function () {
  $("#button-bi").click(function () {
    IDS_CONVERTS.forEach((id) => {
      if (id !== ".binary-to-deci") {
        $(id).hide();
      }
    });
    $(".binary-to-deci").show();
  });

  $("#button-hex").click(function () {
    IDS_CONVERTS.forEach((id) => {
      if (id !== ".hex-to-deci") {
        $(id).hide();
      }
    });
    $(".hex-to-deci").show();
  });

  $("#button-porcentaje").click(function () {
    IDS_CONVERTS.forEach((id) => {
      if (id !== ".porcentaje-to-deci") {
        $(id).hide();
      }
    });
    $(".porcentaje-to-deci").show();
  });

  $("#button-octal").click(function () {
    IDS_CONVERTS.forEach((id) => {
      if (id !== ".octa-to-deci") {
        $(id).hide();
      }
    });
    $(".octa-to-deci").show();
  });
});
