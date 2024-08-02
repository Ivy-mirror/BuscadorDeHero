$(document).ready(function () {
  $("#btnHero").click(function (e) {
      e.preventDefault();
      let idHero = getHeroeID();
      if (idHero === null) {
          // Alerta para el error del manejo de tipo de dato
          alert("Reintenta con un dígito numérico por favor");
      } else {
          let token = "d99f24a4825f426f9b0b4b4410645787";
          $("#resultHero").superhero(token, idHero);

          // Apuntar el scroll hacia los resultados
          $("html, body").animate({
              scrollTop: $("#resultHero").offset().top
          }, 600);
      }
  });
});

// Validacion tipo numérico
function getHeroID() {
  const regex = /^\d+$/;
  let idHero = $("#inputHero").val();
  if (regex.test(idHero)) {
      return idHero;
  } else {
      return null;
  }
}