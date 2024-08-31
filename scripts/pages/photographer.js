// Variable globale pour stocker les informations du photographe actuellement sélectionné
let currentPhotographer = null;

/**
 * Récupère les détails d'un photographe ainsi que les médias associés à partir d'un fichier JSON.
 *
 * @param {number} id - L'identifiant unique du photographe à récupérer.
 * @returns {Promise<Object>} - Une promesse qui renvoie un objet contenant :
 *   - {Object} currentPhotographer - Les informations détaillées du photographe.
 *   - {Array} photographerMedia - Une liste de médias associés à ce photographe.
 */
async function getPhotographerById(id) {
  // Crée une instance de l'API pour accéder aux données stockées dans un fichier JSON
  // eslint-disable-next-line no-undef
  const api = new PhotographerApi("data/photographers.json");
  
  // Récupère les données depuis le fichier JSON à l'aide de l'API
  const data = await api.get();
  const photographers = data.photographers;  // Liste de tous les photographes
  const media = data.media;  // Liste de tous les médias
  
  // Recherche le photographe dont l'ID correspond à l'ID fourni
  currentPhotographer = photographers.find(
    (photographer) => photographer.id == id
  );
  
  // Sélectionne uniquement les médias associés à ce photographe
  const photographerMedia = media.filter(
    (item) => item.photographerId == id
  );
  
  // Retourne les informations du photographe et ses médias
  return { currentPhotographer, photographerMedia };
}

/**
 * Affiche les détails du photographe et ses médias sur la page web.
 *
 * @param {Object} data - Un objet contenant les informations suivantes :
 *   - {Object} currentPhotographer - Les détails du photographe à afficher.
 *   - {Array} photographerMedia - La liste des médias associés au photographe à afficher.
 */
async function displayData(data) {
  // Sélectionne l'élément de la page où les informations du photographe seront affichées
  const photographersSection = document.querySelector(".photograph-header");
  
  // Crée une instance du modèle de photographe pour générer le contenu HTML
  // eslint-disable-next-line no-undef
  const photographerModel = new photographerTemplate(data.currentPhotographer);
  
  // Génère la carte du photographe et l'ajoute à la section sélectionnée
  const userCardDOM = photographerModel.getCurrentUserCardDOM();
  photographersSection.appendChild(userCardDOM);
  
  // Affiche les filtres pour les médias du photographe afin de faciliter la recherche
  photographerModel.displayFilters(data.photographerMedia);
  
  // Affiche la galerie des médias du photographe sur la page
  photographerModel.displayPhotographerGallery(
    data.currentPhotographer,
    data.photographerMedia
  );
}

/**
 * Initialise la page en récupérant l'ID du photographe depuis les paramètres de l'URL,
 * puis récupère et affiche les informations correspondantes.
 */
async function init() {
  // Récupère les paramètres de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("id"), 10);  // Convertit l'ID en nombre
  
  // Récupère les détails du photographe et ses médias associés à partir de l'ID
  const { currentPhotographer, photographerMedia } = await getPhotographerById(
    photographerId
  );
  
  // Affiche les informations du photographe et ses médias sur la page
  await displayData({ currentPhotographer, photographerMedia });
}

// Appelle la fonction d'initialisation lorsque la page est complètement chargée
init();
