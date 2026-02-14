import { assertEquals } from "jsr:@std/assert";
import { Bibliotheque } from "../class/Bibliotheque.ts";
import { Livre } from "../class/Livre.ts";

Deno.test("Ajouter un livre", () => {
  const biblio = new Bibliotheque();
  const livre1: Livre = {
    id: "1",
    titre: "Titre1",
    auteur: "Auteur1",
    isbn: "ISBN1",
    anneePublication: 2020,
    disponible: true,
  };
  biblio.ajouterLivre(livre1);

  const livresliste = biblio.listerLivres();
  assertEquals(livresliste.length, 1);
  assertEquals(livresliste[0].id, "1");
});

Deno.test("Rechercher un livre par titre", () => {
  const biblio = new Bibliotheque();
  const livre1: Livre = {
    id: "1",
    titre: "Titre1",
    auteur: "Auteur1",
    isbn: "ISBN1",
    anneePublication: 2020,
    disponible: true,
  };
  const livre2: Livre = {
    id: "2",
    titre: "Titre2",
    auteur: "Auteur2",
    isbn: "ISBN2",
    anneePublication: 2021,
    disponible: true,
  };
  biblio.ajouterLivre(livre1);
  biblio.ajouterLivre(livre2);

  const resultats = biblio.rechercherLivreParTitre("Titre1");
  assertEquals(resultats.length, 1);
  assertEquals(resultats[0].id, "1");
});

Deno.test("Lister les livres disponibles", () => {
  const biblio = new Bibliotheque();
  const livre1: Livre = {
    id: "1",
    titre: "Titre1",
    auteur: "Auteur1",
    isbn: "ISBN1",
    anneePublication: 2020,
    disponible: true,
  };
  const livre2: Livre = {
    id: "2",
    titre: "Titre2",
    auteur: "Auteur2",
    isbn: "ISBN2",
    anneePublication: 2021,
    disponible: false,
  };
  biblio.ajouterLivre(livre1);
  biblio.ajouterLivre(livre2);

  const livresliste = biblio.listerLivres();
  assertEquals(livresliste.length, 2);
  assertEquals(livresliste[0].id, "1");
  assertEquals(livresliste[1].id, "2");
});

Deno.test("Ajouter un livre avec un ID existant lance une erreur", () => {
  const biblio = new Bibliotheque();
  const livre1: Livre = {
    id: "1",
    titre: "Titre1",
    auteur: "Auteur1",
    isbn: "ISBN1",
    anneePublication: 2020,
    disponible: true,
  };
  biblio.ajouterLivre(livre1);

  try {
    biblio.ajouterLivre(livre1);
  } catch (e) {
    assertEquals(e.message, "Un livre avec l'ID 1 existe déjà");
  }
});
