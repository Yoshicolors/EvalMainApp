Application de mini gestion de bibliothèque réalisé par BRODIER Baptiste

# Pour utiliser l'application

L'application utilise deno, il vous faut donc l'installer :

    -Sur MacOS/Linux : curl -fsSL https://deno.land/install.sh | sh

    -Sur Windows : irm https://deno.land/install.ps1 | iex

# Pour executer l'application :

deno run ../src/main.ts

Pour les test :

deno test ../test/Bibliotheque.test.ts

# Structure de l'application :

    class :
        Bibliotheque.ts
        Livre.ts
    src :
        main.ts
    test:
        Bibliotheque.test.ts
