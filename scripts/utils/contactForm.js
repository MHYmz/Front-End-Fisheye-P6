// Variable pour vérifier si le titre a été ajouté à la modal
let isTitleAdded = false;

// Fonction principale pour afficher la modal de contact
// eslint-disable-next-line no-unused-vars
function displayModal() {
  // Sélectionne les éléments nécessaires dans la modal
  const modal = document.getElementById("contact_modal");
  const modalHeaderTitleName = modal.querySelector(".modal header h2");
  const modalForm = modal.querySelector("form");
  const closeButton = document.querySelector("#contact_modal img");
  const formFields = modalForm.querySelectorAll('input, textarea');

  // Ajoute un titre à la modal si ce n'est pas déjà fait
  if (!isTitleAdded) {
    modalHeaderTitleName.innerHTML += "<br>Mimi Keel";
    isTitleAdded = true;
  }

  // Configure les événements pour le formulaire et la modal
  configureFormEvents(modalForm);
  configureModalEvents(modal, closeButton, formFields);

  // Affiche la modal en changeant son style d'affichage
  modal.style.display = "flex";
}

// Fonction pour configurer les événements du formulaire
function configureFormEvents(form) {
  // Ajoute un gestionnaire d'événement pour le soumission du formulaire
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    const formData = getFormData(form); // Récupère les données du formulaire
    const errorMessage = validateFormData(formData); // Valide les données du formulaire

    if (errorMessage) {
      alert(errorMessage); // Affiche un message d'erreur si les données sont invalides
      return;
    }

    // Affiche les données du formulaire et un message de succès
    displayFormData(formData);
  });
}

// Fonction pour récupérer les données du formulaire
function getFormData(form) {
  return {
    firstName: form.querySelector('[name="prenom"]').value, // Récupère le prénom
    lastName: form.querySelector('[name="nom"]').value,    // Récupère le nom
    email: form.querySelector('[name="email"]').value,      // Récupère l'email
    message: form.querySelector('[name="message"]').value   // Récupère le message
  };
}

// Fonction pour valider les données du formulaire
function validateFormData({ firstName, lastName, email, message }) {
  if (!firstName || !lastName || !email || !message) {
    return "Veuillez remplir tous les champs."; // Vérifie que tous les champs sont remplis
  }
  if (firstName.length < 2 || lastName.length < 2) {
    return "Le prénom et le nom doivent avoir au moins 2 caractères."; // Vérifie la longueur du prénom et du nom
  }
  if (!isValidEmail(email)) {
    return "Veuillez entrer une adresse email valide."; // Vérifie la validité de l'email
  }
  if (message.length > 255) {
    return "Le message ne peut pas dépasser 255 caractères."; // Vérifie la longueur du message
  }
  return ""; // Retourne une chaîne vide si toutes les validations sont passées
}

// Fonction pour vérifier la validité de l'email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour vérifier le format de l'email
  return emailRegex.test(email); // Retourne vrai si l'email est valide, sinon faux
}

// Fonction pour afficher les données du formulaire dans la console et un message de succès
function displayFormData({ firstName, lastName, email, message }) {
  console.log("Prénom:", firstName); // Affiche le prénom dans la console
  console.log("Nom:", lastName);     // Affiche le nom dans la console
  console.log("Email:", email);      // Affiche l'email dans la console
  console.log("Message:", message);  // Affiche le message dans la console

  // Affiche un message de remerciement à l'utilisateur
  alert(`Merci de m'avoir contacté, ${firstName}. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais. À très bientôt !`);
}

// Fonction pour configurer les événements de la modal
function configureModalEvents(modal, closeButton, formFields) {
  // Ajoute un gestionnaire d'événement pour le bouton de fermeture
  // eslint-disable-next-line no-undef
  addEnterListener(closeButton, closeModal);

  // Ajoute un gestionnaire d'événement pour la touche Échap pour fermer la modal
  // eslint-disable-next-line no-undef
  addEscapeListener(() => {
    if (modal.style.display === 'flex') {
      closeModal();
    }
  });

  // Empêche la soumission du formulaire en appuyant sur Entrée dans les champs du formulaire
  formFields.forEach(field => {
    // eslint-disable-next-line no-undef
    addEnterListener(field, event => event.preventDefault());
  });

  // Soumet le formulaire lorsque la touche Entrée est pressée dans le formulaire
  // eslint-disable-next-line no-undef
  addEnterListener(modal.querySelector("form"), () => {
    modal.querySelector("form").dispatchEvent(new Event("submit"));
  });
}

// Fonction pour fermer la modal
function closeModal() {
  const modal = document.getElementById("contact_modal");
  const modalForm = modal.querySelector("form");

  modalForm.reset(); // Réinitialise les champs du formulaire
  modal.style.display = "none"; // Masque la modal
}
