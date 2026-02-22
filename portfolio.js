const btnTop = document.getElementById("btnTop");

// Afficher le bouton après avoir scrollé
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Scroll vers le haut quand on clique
btnTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
