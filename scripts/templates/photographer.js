/*
  Modèle de photographe : Génère des éléments DOM pour représenter un photographe dans l'interface utilisateur.
  Cette fonction retourne un objet contenant des méthodes pour créer des cartes utilisateur, afficher des filtres,
  et afficher la galerie de médias pour un photographe donné.
*/
// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    
    // Crée un élément DOM représentant une carte utilisateur pour la liste des photographes.
    // Cette carte affiche l'image, le nom, la ville, le pays, le slogan et le prix du photographe.
    function getUserCardDOM() {
      const article = document.createElement("article");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const info = document.createElement("div");
      const span = document.createElement("span");
      const pTagline = document.createElement("p");
      const pPrice = document.createElement("p");
  
      // Configure le lien vers la page du photographe avec son identifiant.
      a.href = `photographer.html?id=${id}`;
      a.setAttribute("alt", name);
      
      // Configure l'image du photographe.
      img.setAttribute("src", picture);
      img.setAttribute("alt", "Profile de " + name);
      img.classList.add("avatar");
  
      // Configure le titre du photographe.
      h2.textContent = name;
  
      // Configure les informations supplémentaires (ville, pays, slogan, prix).
      info.classList.add("info");
      span.textContent = `${city}, ${country}`;
      pTagline.textContent = tagline;
      pPrice.textContent = `${price}€/jour`;
  
      // Ajoute les informations au conteneur d'informations.
      info.appendChild(span);
      info.appendChild(pTagline);
      info.appendChild(pPrice);
  
      // Ajoute l'image et le nom du photographe au lien.
      a.appendChild(img);
      a.appendChild(h2);
  
      // Ajoute le lien et les informations à l'article.
      article.appendChild(a);
      article.appendChild(info);
  
      return article;
    }
    
    // Crée un élément DOM représentant la carte utilisateur actuelle sur la page du photographe.
    // Cette carte affiche le nom, la ville, le pays et le slogan du photographe.
    function getCurrentUserCardDOM() {
      const photographerHeader = document.querySelector(".photograph-info");
      const picture = `assets/photographers/${portrait}`;
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const img = document.createElement("img");
  
      // Configure le titre principal (nom du photographe).
      h1.textContent = name;
      h2.textContent = `${city}, ${country}`;
      p.textContent = tagline;
  
      // Configure l'image du photographe avec des attributs appropriés.
      img.setAttribute("src", picture);
      img.setAttribute("alt", name);
      img.setAttribute("tabindex", 9);
      img.classList.add("avatar");
  
      // Ajoute le nom, la ville, le pays et le slogan au header du photographe.
      photographerHeader.appendChild(h1);
      photographerHeader.appendChild(h2);
      photographerHeader.appendChild(p);
  
      return img;
    }
    
    // Affiche les filtres de tri dans la page du photographe.
    // Permet à l'utilisateur de trier les médias par popularité, date ou titre.
    function displayFilters(photographerMedia) {
      const dropdownContent = document.querySelector(".dropdown-content");
      const dropbtn = document.querySelector(".dropbtn");
      const filterButtons = Array.from(
        document.querySelectorAll(".dropdown-content button")
      );
  
      // Sélectionne le bouton de filtrage par défaut (popularité).
      const defaultButton = filterButtons.find(
        (button) => button.id === "btn-popularity"
      );
      const btnPopularity = document.getElementById("btn-popularity");
      const btnDate = document.getElementById("btn-date");
      const btnTitle = document.getElementById("btn-title");
      
      // Ajoute des écouteurs d'événements pour les boutons de filtrage.
      btnPopularity.addEventListener("click", function () {
        // eslint-disable-next-line no-undef
        sortByPopularity(photographerMedia, displayPhotographerGallery);
        updateTabindex(btnPopularity);
      });
      btnDate.addEventListener("click", function () {
        // eslint-disable-next-line no-undef
        sortByDate(photographerMedia, displayPhotographerGallery);
        updateTabindex(btnDate);
      });
      btnTitle.addEventListener("click", function () {
        // eslint-disable-next-line no-undef
        sortByTitle(photographerMedia, displayPhotographerGallery);
        updateTabindex(btnTitle);
      });
      
      // eslint-disable-next-line no-unused-vars
      let selectedButton = defaultButton;
  
      // Met à jour l'état des boutons de filtrage (tabindex et aria-selected).
      function updateTabindex(activeButton) {
          filterButtons.forEach((button) => {
              const isSelected = button === activeButton;
              const tabIndex = isSelected ? 10 : 10;
              const ariaSelected = isSelected ? "true" : "false";
  
              button.setAttribute("tabindex", tabIndex);
              button.setAttribute("aria-selected", ariaSelected);
  
              if (isSelected) {
                  button.classList.add("active");
              } else {
                  button.classList.remove("active");
              }
          });
  
          selectedButton = activeButton;
      }
  
      // Configure le bouton de filtrage par défaut et ajoute un événement pour afficher/cacher le menu.
      dropbtn.textContent = defaultButton.textContent;
      defaultButton.classList.add("active");
      dropbtn.innerHTML =
        dropbtn.textContent +
    ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
        
      dropbtn.addEventListener("click", (event) => {
        event.stopPropagation(); 
        const isHidden = dropdownContent.classList.contains("hide-menu");
        if (isHidden) {
          dropdownContent.classList.remove("hide-menu");
          dropbtn.innerHTML =
            dropbtn.textContent +
            ' <em class="fa-solid fa-chevron-up" aria-hidden="true"></em>';
        } else {
          dropdownContent.classList.add("hide-menu");
          dropbtn.innerHTML =
            dropbtn.textContent +
            ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
        }
      });
  
      // Met à jour l'état des boutons de filtrage lorsque l'utilisateur clique sur un bouton.
      dropdownContent.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            filterButtons.forEach((button) => {
                button.classList.remove("active");
            });
  
            event.target.classList.add("active");
            dropbtn.textContent = event.target.textContent;
  
            updateTabindex(event.target);
            selectedButton = event.target;
  
            const activeButtonIndex = filterButtons.indexOf(event.target);
            const reorderedButtons = [
                filterButtons[activeButtonIndex],
                ...filterButtons.slice(0, activeButtonIndex),
                ...filterButtons.slice(activeButtonIndex + 1),
            ];
  
            dropdownContent.innerHTML = "";
            reorderedButtons.forEach((button) => {
                dropdownContent.appendChild(button);
            });
        }
      });
  
      // Cacher le menu de filtrage lorsque l'utilisateur clique en dehors du menu.
      document.addEventListener("click", () => {
        if (!dropdownContent.classList.contains("hide-menu")) {
          dropdownContent.classList.add("hide-menu");
          dropbtn.innerHTML =
            dropbtn.textContent +
            ' <em class="fa-solid fa-chevron-up rotate" aria-hidden="true"></em>';
        }
      });
    }
    
    // Affiche la galerie de médias pour un photographe donné.
    // Crée et ajoute des éléments DOM pour chaque média du photographe, incluant des images et vidéos.
    function displayPhotographerGallery(photographer, photographerMedia) {
      const gallery = document.querySelector(".gallery");
      // eslint-disable-next-line no-undef
      const likesAndDislikes = getLikesAndDislikes();
      // eslint-disable-next-line no-undef
      const mediaFactory = new MediaFactory();
      let tabindexCount = 11;
    
      if (gallery && photographer) {
        let totalLikes = 0;
        const price = photographer.price || 0;
        
        gallery.innerHTML = "";
  
        photographerMedia.forEach((mediaData) => {
          const media = mediaFactory.createMedia({
            ...mediaData,
            photographer: photographer.name,
          });
    
          // Crée un élément média (image ou vidéo) en fonction du type de média.
          const mediaElement = media.type === "image" ? document.createElement("img") : media.type === "video" ? document.createElement("video"): (() => {
            console.error("Type de média inconnu :", media.type);
          })();
  
          const mediaLink = document.createElement("a");
          const card = document.createElement("article");
          const figure = document.createElement("figure");
          const figcaption = document.createElement("figcaption");
          const titleElement = document.createElement("h2");
          const likesContainer = document.createElement("span");
          const heartIcon = document.createElement("i");
    
          // Configure les attributs et les propriétés de l'élément média.
          mediaElement.src = media.src;
          if (media.type === "image") {
            mediaElement.alt = "A photo titled :" + media.title;
          } else if (media.type === "video") {
            mediaElement.controls = true;
            mediaElement.setAttribute("aria-label", "A video titled :" + media.title);
          }
    
          // Configure le conteneur du lien média.
          mediaLink.classList.add("media-container");
          mediaLink.setAttribute("title", media.title);
          mediaLink.appendChild(mediaElement);
          mediaLink.setAttribute("tabindex", tabindexCount);
          tabindexCount++;
    
          // Configure le conteneur des likes.
          likesContainer.setAttribute("tabindex", tabindexCount);
          tabindexCount++;
    
          heartIcon.className = "fas fa-heart";
          heartIcon.setAttribute("role", "img");
          heartIcon.setAttribute("aria-label", "likes");
  
          // Gestion de l'état initial du like.
          if (likesAndDislikes[media.id] === 'liked') {
            heartIcon.classList.add('liked');
          }
  
          likesContainer.appendChild(heartIcon);
          
          // Si les likes de l'utilisateur sont indéfinis, les définir sur les likes actuels.
          if(mediaData.userLikes === undefined) {
            mediaData.userLikes = mediaData.likes;
          } 
  
          // Met à jour l'apparence du like en fonction de l'état actuel.
          if(mediaData.userLikes == mediaData.likes) {
            heartIcon.classList.remove("liked");
          } else {
            heartIcon.classList.add("liked");
          }
  
          const likesNumber = document.createElement("b");
          likesNumber.textContent = mediaData.userLikes;
          likesContainer.appendChild(likesNumber);
    
          titleElement.textContent = media.title;
          
          // Configure le lien du média avec les attributs appropriés.
          mediaLink.setAttribute("role", "button");
          mediaLink.setAttribute("href", "#");
          mediaLink.setAttribute("data-media", media.id);
          mediaLink.onclick = function (event) {
            event.preventDefault();
            // eslint-disable-next-line no-undef
            displayLightbox(media, photographerMedia);
          };
          // Gestion de l'événement de la touche "Entrée" pour ouvrir la lightbox.
          mediaLink.addEventListener("keydown", function (event) {
            if (event.code === "Enter") {
              event.preventDefault();
              // eslint-disable-next-line no-undef
              displayLightbox(media, photographerMedia);
            }
          });
    

  // Configure le conteneur des likes.
  likesContainer.setAttribute("tabindex", tabindexCount); // Assurez-vous que le conteneur peut recevoir le focus.
  tabindexCount++;

  // Ajoutez un gestionnaire d'événements pour les clics sur le conteneur de likes.
  likesContainer.addEventListener("click", function () {
  const currentLikes = parseInt(likesNumber.textContent, 10);
  const isLiked = mediaData.likes !== mediaData.userLikes;

  if (isLiked) {
    mediaData.userLikes = currentLikes - 1;
    likesNumber.textContent = currentLikes - 1;
    heartIcon.classList.remove("liked");
    likesAndDislikes[media.id] = 'disliked'; 
  } else {
    mediaData.userLikes = currentLikes + 1;
    likesNumber.textContent = currentLikes + 1;
    heartIcon.classList.add("liked");
    likesAndDislikes[media.id] = 'liked';
  }
  // eslint-disable-next-line no-undef
  updateLikesAndDislikes(likesAndDislikes);
    totalLikes = isLiked ? totalLikes - 1 : totalLikes + 1;
  // eslint-disable-next-line no-undef
  updateTotalLikes(totalLikes);
  });

  // Ajoutez un gestionnaire d'événements pour les interactions clavier.
  likesContainer.addEventListener("keydown", function (event) {
    if (event.code === "Enter") { // Vérifiez si la touche "Entrée" est pressée.
    event.preventDefault(); // Empêchez l'action par défaut (si nécessaire).
    likesContainer.click(); // Simulez un clic sur le conteneur de likes.
  }
  });
    
          // Ajoute les éléments au DOM.
          figcaption.appendChild(titleElement);
          figcaption.appendChild(likesContainer);
          figure.appendChild(mediaLink);
          figure.appendChild(figcaption);
          card.appendChild(figure);
    
          totalLikes += media.likes;
          gallery.appendChild(card);
        });
  
        // Met à jour le nombre total de likes et le prix du photographe.
        // eslint-disable-next-line no-undef
        updateTotalLikes(totalLikes);
        // eslint-disable-next-line no-undef
        updatePrice(price);
      }
    }
    
    return {
      picture,
      getUserCardDOM,
      getCurrentUserCardDOM,
      displayFilters,
      displayPhotographerGallery,
    };
  }
  