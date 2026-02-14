import { Bibliotheque } from "../class/Bibliotheque.ts";
import { Livre } from "../class/Livre.ts";

const livre1: Livre = {
  id: "1",
  titre: "Titre1",
  auteur: "Auteur1",
  isbn: "ISBN1",
  anneePublication: 2020,
  disponible: true,
};

const biblio = new Bibliotheque();
biblio.ajouterLivre(livre1);

const livres = biblio.listerLivres();
console.log("Livres dans la bibliothèque:", livres);

const resultats = biblio.rechercherLivreParTitre("Titre1");
console.log("Résultats de la recherche:", resultats);

try {
  biblio.ajouterLivre(livre1);
} catch (e) {
  console.error(e.message);
}
