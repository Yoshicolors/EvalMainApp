import { Livre } from "./Livre.ts";
export class Bibliotheque {
  private livres: Map<string, Livre> = new Map();

  ajouterLivre(livre: Livre): void {
    if (this.livres.has(livre.id)) {
      throw new Error(`Un livre avec l'ID ${livre.id} existe déjà`);
    }
    this.livres.set(livre.id, { ...livre, disponible: true });
  }

  listerLivres(): Livre[] {
    return Array.from(this.livres.values());
  }

  rechercherLivreParTitre(titre: string): Livre[] {
    return Array.from(this.livres.values()).filter((livre) =>
      livre.titre.toLowerCase().includes(titre.toLowerCase())
    );
  }
}
