// Classe Image : Représente une image dans la galerie et hérite de la classe Media.
// eslint-disable-next-line no-unused-vars, no-undef
class Image extends Media {
  // Constructeur : Initialise une nouvelle instance de la classe Image.
  // Paramètre : data (objet) - Contient les informations nécessaires pour construire l'image.
  constructor(data) {
    // Appelle le constructeur de la classe parente Media pour initialiser les propriétés héritées.
    super(data);

    // Définit le type de média comme "image".
    this._type = "image";

    // Construit le chemin d'accès à l'image en remplaçant les espaces par des underscores
    // et en l'ajoutant au chemin de la galerie.
    const path = data.photographer.replace(/\s/g, "_");
    this._src = `assets/photographers/gallery/${path}/${data.image}`;
  }

  // Getter pour obtenir le type de média (image dans ce cas).
  get type() {
    return this._type;
  }

  // Getter pour obtenir le chemin d'accès source de l'image.
  get src() {
    return this._src;
  }
}
