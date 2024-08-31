// Classe Photographer pour représenter un photographe avec ses informations personnelles
// eslint-disable-next-line no-unused-vars
class Photographer {
  // Constructeur de la classe Photographer
  constructor(data) {
    // Initialise les propriétés de l'objet avec les données fournies lors de la création de l'instance
    this._id = data.id;         // Identifiant unique du photographe
    this._name = data.name;     // Nom complet du photographe
    this._portrait = data.portrait; // Nom du fichier de l'image de portrait du photographe
    this._city = data.city;     // Ville où le photographe est basé
    this._country = data.country; // Pays où le photographe est basé
    this._tagline = data.tagline; // Slogan ou description courte du photographe
    this._price = data.price;   // Prix des services du photographe
  }

  // Getter pour accéder à l'identifiant du photographe
  get id() {
    return this._id;
  }

  // Getter pour accéder au nom du photographe
  get name() {
    return this._name;
  }

  // Getter pour accéder à l'image du portrait du photographe
  get portrait() {
    // Construit le chemin d'accès à l'image de portrait en utilisant le nom du fichier
    return `assets/photographers/${this._portrait}`;
  }

  // Getter pour accéder à la ville du photographe
  get city() {
    return this._city;
  }

  // Getter pour accéder au pays du photographe
  get country() {
    return this._country;
  }

  // Getter pour accéder au slogan ou à la description courte du photographe
  get tagline() {
    return this._tagline;
  }

  // Getter pour accéder au prix des services du photographe
  get price() {
    return this._price;
  }
}
