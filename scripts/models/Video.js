// Classe Video qui étend la classe Media pour représenter une vidéo
// eslint-disable-next-line no-unused-vars, no-undef
class Video extends Media {
  // Constructeur de la classe Video
  // Paramètre 'data' : un objet contenant les informations sur la vidéo et le photographe
  constructor(data) {
    // Appelle le constructeur de la classe parente Media pour initialiser les propriétés héritées
    super(data);
    
    // Déclare le type de média comme étant 'video'
    this._type = "video";
    
    // Crée le chemin d'accès à la vidéo en utilisant le nom du photographe et le nom du fichier vidéo
    // Remplace les espaces dans le nom du photographe par des underscores pour former le chemin
    const path = data.photographer.replace(/\s/g, "_");
    // Définit la source de la vidéo en combinant le chemin du photographe et le nom du fichier vidéo
    this._src = `assets/photographers/gallery/${path}/${data.video}`;
  }

  // Méthode getter pour obtenir le type de média
  // Retourne la valeur de la propriété '_type', qui est 'video'
  get type() {
    return this._type;
  }

  // Méthode getter pour obtenir la source de la vidéo
  // Retourne la valeur de la propriété '_src', qui est le chemin d'accès complet à la vidéo
  get src() {
    return this._src;
  }
}
