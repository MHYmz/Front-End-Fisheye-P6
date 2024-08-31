// Fonction générique pour mettre à jour le contenu textuel d'un élément HTML
// Paramètres : 
// - elementId : l'ID de l'élément HTML à mettre à jour
// - text : le texte à insérer dans l'élément
// Retourne : l'élément HTML mis à jour
function updateElementText(elementId, text) {
  // Récupère l'élément HTML en utilisant son ID
  const element = document.getElementById(elementId);
  
  // Remplace le contenu textuel de l'élément avec le texte fourni
  element.textContent = text;
  
  // Renvoie l'élément mis à jour pour un usage ultérieur, si nécessaire
  return element;
}

// Fonction pour mettre à jour l'affichage du nombre total de likes
// Paramètre : 
// - totalLikes : le nombre total de "likes" à afficher
// eslint-disable-next-line no-unused-vars
function updateTotalLikes(totalLikes) {
  // Appelle la fonction générique pour mettre à jour l'élément affichant les likes
  // Ajoute un espace après le nombre pour faire place à l'icône
  const likesSpan = updateElementText("totalLikes", `${totalLikes} `);
  
  // Crée une nouvelle icône de cœur pour illustrer les "likes"
  const heartIcon = document.createElement("i");
  heartIcon.className = "fas fa-heart"; // Utilisation de la classe FontAwesome pour l'icône
  
  // Ajoute l'icône de cœur après le nombre de likes dans l'élément
  likesSpan.appendChild(heartIcon);
}

// Fonction pour mettre à jour l'affichage du prix par jour
// Paramètre : 
// - price : le montant du prix à afficher
// eslint-disable-next-line no-unused-vars
function updatePrice(price) {
  // Met à jour l'élément affichant le prix avec le texte formaté
  updateElementText("price", `${price}€ / jour`);
}
