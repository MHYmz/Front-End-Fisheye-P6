// Variables globales pour suivre l'index actuel et les médias filtrés
let currentIndex = 0; // Index du média actuellement affiché dans la lightbox
let filteredMedia = []; // Liste des médias à afficher dans la lightbox

// Met à jour le contenu de la lightbox avec le média actuel
function updateLightboxContent() {
  // Crée une instance de MediaFactory pour gérer la création des médias
  // eslint-disable-next-line no-undef
  const mediaFactory = new MediaFactory();
  
  // Crée un objet média en utilisant les données du média actuel et le nom du photographe
  const currentMedia = mediaFactory.createMedia({
    ...filteredMedia[currentIndex], // Données du média actuel
    // eslint-disable-next-line no-undef
    photographer: currentPhotographer.name, // Nom du photographe
  });
  
  // Affiche le contenu du média actuel dans la lightbox
  displayLightbox(currentMedia, filteredMedia);
}

// Affiche le média suivant dans la lightbox
function showNextMedia() {
  // Passe à l'index du média suivant, en revenant au début si nécessaire
  currentIndex = (currentIndex + 1) % filteredMedia.length;
  
  // Met à jour le contenu de la lightbox pour afficher le média suivant
  updateLightboxContent();
}

// Affiche le média précédent dans la lightbox
function showPreviousMedia() {
  // Passe à l'index du média précédent, en revenant à la fin si nécessaire
  currentIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
  
  // Met à jour le contenu de la lightbox pour afficher le média précédent
  updateLightboxContent();
}

// Affiche la lightbox avec le média courant
function displayLightbox(currentMedia, allMedia) {
  // Sélectionne l'élément de la lightbox dans le DOM
  const lightbox = document.getElementById("lightbox_modal");
  const lightboxContent = lightbox.querySelector(".lightbox #lightboxContent");

  // Efface le contenu précédent de la lightbox
  lightboxContent.innerHTML = '';

  // Crée et ajoute l'élément média (image ou vidéo) à la lightbox
  const lightboxMediaElement = createMediaElement(currentMedia);
  const lightboxTitleElement = createTitleElement(currentMedia.title);

  lightboxContent.appendChild(lightboxMediaElement);
  lightboxContent.appendChild(lightboxTitleElement);

  // Crée et ajoute les flèches de navigation (précédent et suivant) à la lightbox
  const leftArrow = createArrowElement("fas fa-chevron-left", showPreviousMedia);
  const rightArrow = createArrowElement("fas fa-chevron-right", showNextMedia);

  lightboxContent.appendChild(leftArrow);
  lightboxContent.appendChild(rightArrow);

  // Active la fermeture de la lightbox lorsque la touche Escape est pressée
  // eslint-disable-next-line no-undef
  addEscapeListener(lightbox);

  // Affiche la lightbox
  lightbox.style.display = "flex";

  // Met à jour les variables globales avec les médias filtrés et l'index actuel
  filteredMedia = allMedia;
  currentIndex = filteredMedia.findIndex(media => media.id === currentMedia.id);
}

// Crée un élément pour afficher le média (image ou vidéo) dans la lightbox
function createMediaElement(media) {
  let mediaElement;
  
  // Crée un élément <img> pour les images
  if (media.type === "image") {
    mediaElement = document.createElement("img");
    mediaElement.src = media.src; // Source de l'image
    mediaElement.alt = "Image en plein écran"; // Texte alternatif pour l'image
  } 
  // Crée un élément <video> pour les vidéos
  else if (media.type === "video") {
    mediaElement = document.createElement("video");
    mediaElement.src = media.src; // Source de la vidéo
    mediaElement.alt = "Vidéo en plein écran"; // Texte alternatif pour la vidéo
    mediaElement.controls = true; // Ajoute des contrôles de lecture à la vidéo
  } 
  // Lance une erreur si le type de média est inconnu
  else {
    throw new Error("Le type du média courant n'est pas reconnu");
  }
  
  mediaElement.classList.add("lightbox-media"); // Ajoute une classe CSS pour le style
  return mediaElement;
}

// Crée un élément titre pour le média affiché dans la lightbox
function createTitleElement(title) {
  const titleElement = document.createElement("h2");
  titleElement.id = "lightboxTitle"; // ID pour le titre
  titleElement.textContent = title; // Définit le texte du titre
  return titleElement;
}

// Crée une flèche de navigation (gauche ou droite) avec un gestionnaire de clic
function createArrowElement(className, clickHandler) {
  const arrowElement = document.createElement("i");
  arrowElement.className = `${className} arrow`; // Classe CSS pour le style de la flèche
  arrowElement.addEventListener("click", clickHandler); // Ajoute un événement de clic pour la navigation
  return arrowElement;
}

// Ferme la lightbox en la masquant
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
  const lightbox = document.getElementById("lightbox_modal");
  lightbox.style.display = "none"; // Cache la lightbox
}

// Ajoute des écouteurs d'événements pour les touches fléchées gauche et droite
// eslint-disable-next-line no-unused-vars
function addArrowKeyListener(previousHandler, nextHandler) {
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      previousHandler(); // Appelle le gestionnaire de la touche fléchée gauche
    } else if (event.key === "ArrowRight") {
      nextHandler(); // Appelle le gestionnaire de la touche fléchée droite
    }
  });
}
