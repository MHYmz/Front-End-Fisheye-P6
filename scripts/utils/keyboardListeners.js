// Fonction pour ajouter un écouteur d'événements pour une touche spécifique
// Cette fonction attache un gestionnaire d'événements à un élément pour détecter
// lorsqu'une touche spécifique est pressée. Lorsqu'elle est pressée, le callback
// fourni est exécuté. Si `preventDefault` est vrai, l'action par défaut du navigateur
// pour cette touche est annulée.
function addKeyListener(key, callback, element = document, preventDefault = false) {
  element.addEventListener("keydown", function (event) {
      // Vérifie si la touche pressée correspond à celle spécifiée
      if (event.code === key) {
          // Exécute la fonction de rappel fournie
          callback(event);
          // Si `preventDefault` est vrai, empêche le comportement par défaut de la touche
          if (preventDefault) {
              event.preventDefault();
          }
      }
  });
}

// Fonction pour ajouter un écouteur d'événements spécifique à la touche 'Échap'
// Cette fonction utilise `addKeyListener` pour attacher un gestionnaire d'événements
// à la touche 'Échap'. Lorsque 'Échap' est pressée, le callback fourni est exécuté.
// eslint-disable-next-line no-unused-vars
function addEscapeListener(callback) {
  addKeyListener("Escape", callback);
}

// Fonction pour ajouter un écouteur d'événements spécifique à la touche 'Entrée'
// Cette fonction utilise `addKeyListener` pour attacher un gestionnaire d'événements
// à la touche 'Entrée' sur l'élément spécifié. Lorsque 'Entrée' est pressée, le callback
// fourni est exécuté et l'action par défaut est annulée.
// eslint-disable-next-line no-unused-vars
function addEnterListener(element, callback) {
  addKeyListener("Enter", callback, element, true);
}

// Fonction pour ajouter des écouteurs d'événements pour les touches fléchées gauche et droite
// Cette fonction utilise `addKeyListener` pour attacher des gestionnaires d'événements
// pour les touches fléchées gauche et droite. Lorsque chaque touche est pressée, 
// le callback correspondant est exécuté.
// eslint-disable-next-line no-unused-vars
function addArrowKeyListener(callbackLeft, callbackRight) {
  addKeyListener("ArrowLeft", callbackLeft);
  addKeyListener("ArrowRight", callbackRight);
}
