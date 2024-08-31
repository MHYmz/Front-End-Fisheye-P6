// Classe MediaFactory est responsable de la création d'objets de type Media
// eslint-disable-next-line no-unused-vars
class MediaFactory {
  // La méthode createMedia crée un objet Media en fonction des données fournies
  createMedia(data) {
    // Vérifie si les données contiennent une propriété 'image'
    // Si oui, crée et retourne un nouvel objet Image en utilisant les données fournies
    if (data.image) {
      return new Image(data);
    } 
    // Vérifie si les données contiennent une propriété 'video'
    // Si oui, crée et retourne un nouvel objet Video en utilisant les données fournies
    else if (data.video) {
      // eslint-disable-next-line no-undef
      return new Video(data);
    } 
    // Si les données ne correspondent ni à une image ni à une vidéo, 
    // lance une erreur pour signaler que le type de média est inconnu
    else {
      throw new Error("Type de média inconnu");
    }
  }
}