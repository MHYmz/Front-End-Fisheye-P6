// Classe Api pour gérer les requêtes à l'API
class Api {
  /**
   * Constructeur de la classe Api
   * @param {string} url - L'URL de l'API à laquelle les requêtes seront envoyées
   */
  constructor(url) {
    // Initialisation de l'URL de l'API
    this._url = url;
  }

  /**
   * Méthode pour effectuer une requête GET à l'API
   * @returns {Promise<Object>} La réponse de l'API sous forme d'objet JSON
   * @throws {Error} Si une erreur se produit lors de la requête
   */
  async get() {
    try {
      // Envoi de la requête GET à l'URL de l'API
      const res = await fetch(this._url);
      
      // Vérification si la réponse est valide (statut HTTP 200-299)
      if (!res.ok) {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }

      // Renvoie la réponse de l'API sous forme de JSON
      return await res.json();
    } catch (err) {
      // En cas d'erreur (réseau ou autre), log l'erreur et la renvoie pour traitement ultérieur
      console.log("Une erreur s'est produite lors de la requête GET", err);
      throw err;
    }
  }
}

// Classe PhotographerApi qui hérite de la classe Api
// eslint-disable-next-line no-unused-vars
class PhotographerApi extends Api {
  /**
   * Constructeur de la classe PhotographerApi
   * @param {string} url - L'URL de l'API spécifique aux photographes
   */
  constructor(url) {
    // Appelle le constructeur de la classe parente Api
    super(url);
  }

  /**
   * Méthode pour obtenir la liste des photographes depuis l'API
   * @returns {Promise<Array>} La liste des photographes sous forme de tableau d'objets
   */
  async getPhotographers() {
    // Appelle la méthode get de la classe Api pour obtenir les données de l'API
    const data = await this.get();
    
    // Renvoie la liste des photographes extraite des données de l'API
    return data.photographers;
  }

  /**
   * Méthode pour obtenir la liste des médias depuis l'API
   * @returns {Promise<Array>} La liste des médias sous forme de tableau d'objets
   */
  async getMedias() {
    // Appelle la méthode get de la classe Api pour obtenir les données de l'API
    const data = await this.get();
    
    // Renvoie la liste des médias extraite des données de l'API
    return data.media;
  }
}