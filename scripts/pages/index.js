// Fonction pour récupérer les photographes à partir de l'API
async function getPhotographers() {
    // Crée une instance de l'API avec le chemin vers le fichier JSON
    // eslint-disable-next-line no-undef
    const api = new PhotographerApi("data/photographers.json");
  
    // Récupère les données des photographes depuis l'API
    const photographers = await api.getPhotographers();
  
    // Retourne un objet contenant le tableau de photographes
    return { photographers };
  }
  
  // Fonction pour afficher les photographes dans le DOM
  async function displayData(photographers) {
    // Sélectionne la section où les cartes des photographes seront ajoutées
    const photographersSection = document.querySelector(".photographer_section");
  
    // Crée et ajoute une carte pour chaque photographe dans la section
    photographers.forEach(photographer => {
        // Crée un modèle de carte pour le photographe
        // eslint-disable-next-line no-undef
        const model = new photographerTemplate(photographer);
  
        // Obtient le DOM de la carte du photographe
        const cardDOM = model.getUserCardDOM();
  
        // Ajoute la carte du photographe à la section
        photographersSection.appendChild(cardDOM);
    });
  }
  
  // Fonction d'initialisation au chargement de la page
  async function init() {
    // Récupère les photographes
    const { photographers } = await getPhotographers();
  
    // Affiche les photographes
    displayData(photographers);
  }
  
  // Lance la fonction d'initialisation lors du chargement de la page
  init();
  