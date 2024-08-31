// Classe Media : Représente un média avec ses informations essentielles
// eslint-disable-next-line no-unused-vars
class Media {
  // Constructeur de la classe Media : Initialise un objet Media avec les données fournies
  constructor(data) {
    // Définir l'identifiant unique du média
    this._id = data.id;
    // Définir l'identifiant du photographe qui a créé ce média
    this._photographerId = data.photographerId;
    // Définir le titre du média
    this._title = data.title;
    // Définir le nombre de likes que le média a reçus
    this._likes = data.likes;
  }

  // Getter pour obtenir l'identifiant du média
  get id() {
    return this._id;
  }

  // Getter pour obtenir l'identifiant du photographe
  get photographerId() {
    return this._photographerId;
  }

  // Getter pour obtenir le titre du média
  get title() {
    return this._title;
  }

  // Getter pour obtenir le nombre de likes du média
  get likes() {
    return this._likes;
  }
}
