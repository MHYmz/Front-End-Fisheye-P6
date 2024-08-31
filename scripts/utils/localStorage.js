/**
 * Récupère les données de likes et dislikes depuis le stockage local du navigateur.
 * 
 * Cette fonction vérifie si des données sont stockées sous la clé 'likesAndDislikes' dans le stockage local. 
 * Si des données sont trouvées, elles sont converties de leur format JSON en un objet JavaScript. 
 * Si aucune donnée n'est trouvée, la fonction renvoie un objet vide.
 * 
 * @returns {Object} Un objet JavaScript contenant les likes et dislikes, ou un objet vide si aucune donnée n'est trouvée.
 */
// eslint-disable-next-line no-unused-vars
const getLikesAndDislikes = () => {
  const storedData = localStorage.getItem('likesAndDislikes');
  return storedData ? JSON.parse(storedData) : {};
};

/**
 * Enregistre les données de likes et dislikes dans le stockage local du navigateur.
 * 
 * Cette fonction prend un objet JavaScript contenant les likes et dislikes et le convertit en une chaîne JSON avant de le stocker 
 * sous la clé 'likesAndDislikes' dans le stockage local. Cela permet de conserver ces informations entre les sessions de navigation.
 * 
 * @param {Object} likesAndDislikes - Un objet contenant les likes et dislikes à stocker dans le stockage local.
 */
// eslint-disable-next-line no-unused-vars
const updateLikesAndDislikes = (likesAndDislikes) => {
  const dataToStore = JSON.stringify(likesAndDislikes);
  localStorage.setItem('likesAndDislikes', dataToStore);
};