// Fonction pour trier les données des médias par date
// Objectif : Trier les médias par leur date de création pour les afficher chronologiquement.
// mediaData : Liste des objets médias contenant une propriété "date".
// displayPhotographerGallery : Fonction qui met à jour l'affichage de la galerie du photographe avec les médias triés.
// eslint-disable-next-line no-unused-vars
function sortByDate(mediaData, displayPhotographerGallery) {
  // Tri des médias en fonction de leur date (ordre croissant)
  const sortedMediaByDate = mediaData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Mise à jour de la galerie du photographe avec les médias triés par date
  // eslint-disable-next-line no-undef
  displayPhotographerGallery(currentPhotographer, sortedMediaByDate);
}

// Fonction pour trier les données des médias par titre
// Objectif : Trier les médias par titre pour les afficher par ordre alphabétique.
// mediaData : Liste des objets médias contenant une propriété "title".
// displayPhotographerGallery : Fonction qui met à jour l'affichage de la galerie du photographe avec les médias triés.
// eslint-disable-next-line no-unused-vars
function sortByTitle(mediaData, displayPhotographerGallery) {
  // Tri des médias en fonction de leur titre (ordre alphabétique)
  const sortedMediaByTitle = mediaData.sort((a, b) => a.title.localeCompare(b.title));

  // Mise à jour de la galerie du photographe avec les médias triés par titre
  // eslint-disable-next-line no-undef
  displayPhotographerGallery(currentPhotographer, sortedMediaByTitle);
}

// Fonction pour trier les données des médias par popularité
// Objectif : Trier les médias par popularité (nombre de likes) pour les afficher du plus populaire au moins populaire.
// mediaData : Liste des objets médias contenant une propriété "likes".
// displayPhotographerGallery : Fonction qui met à jour l'affichage de la galerie du photographe avec les médias triés.
// eslint-disable-next-line no-unused-vars
function sortByPopularity(mediaData, displayPhotographerGallery) {
  // Tri des médias en fonction de leur popularité (ordre décroissant, du plus aimé au moins aimé)
  const sortedMediaByPopularity = mediaData.sort((a, b) => b.likes - a.likes);

  // Mise à jour de la galerie du photographe avec les médias triés par popularité
  // eslint-disable-next-line no-undef
  displayPhotographerGallery(currentPhotographer, sortedMediaByPopularity);
}
