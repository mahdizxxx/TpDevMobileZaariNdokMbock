
# TP DEV Mobile

Vous allez faire un tp utilisant les technolgies REACT & REACTNATIVE.

# I- Obligations
Vous allez réaliser en 7h une application "Lecteur de news"
Sur le git actuel, vous avez à disposition la dernière mise à jour fonctionnelle de l'application faite en cours.
Vous devrez obligatoirement utiliser Redux.

# II- Sujet
Votre application sera un lecteur de news. Les infos seront obtenues via l'[API NEWAPI](https://newsapi.org/).

## Page accueil (5 points)
Sur la page d'accueil, vous afficherez sous forme de liste les news les plus récentes pas encore lues.
Vous ne devez afficher que les news des catégories sélectionnées par l'utilisateur.
Lorsque l'on sélectionne une news, on est dirigé vers une nouvelle page de détail qui affiche le détail complet de la news.
Lorsque l'on "slide" la news, on la considère comme "lue", elle se supprime de la liste et ne sera plus proposée.
Dans la liste pour chaque news, vous devez afficher le titre, la source, la date de publication et une image.
Les news lues sont stockées dans le storage via un reducer.

## Page détail (4 points)
Sur cette page vous affichez le titre, l'image, la date, l'auteur, le contenu.
Un bouton back permet de revenir à la page d'accueil.

## Page settings (5 points)
Cette page permet de paramétrer le type de news que l'on veut affiche ("santé", "informatique",...).
Vous devrez créer des catégories et laisser le chxoi à l'utilisateur de les sélectionner.
C'est grace aux catégories sélectionnées que vous ferez les appels à l'API pour afficher les news sur l'écran d'accueil.
Les catégories de l'utilisateur sont stockées dans le storage et accessible via un reducer.

## Redux (6 points)
Vous allez mettre en place [Redux](https://redux.js.org/) et [ReactRedux](https://react-redux.js.org/) afin de centraliser les éléments de votre application.
Les news lues, et les catégories seront enregistrées dans le storage et accessible via un reducer (un pour les news lues et un pour les catégories).
Vous utiliserez les actions asynchrones des reducers pour mettre à jour les données.

# Groupes et fonctionnement

Le projet est a développer en groupe de 2 (DEUX) personnes.
Tous les groupes seront définis en cours au début de la session. Aucun changement n'est possible dans la journée.

Les étudiants sont encouragés (mais pas obligés) à mettre en place un système de contrôle des sources de type Git ou équivalent, afin d'affecter et partager efficacement les fichiers de codes et autres composants numériques du projet (fichiers sources, descripteurs de déploiement, documents de recherche, cas d'utilisation, suites de tests, etc.).

Le rendu sera fait par mail à l'addresse vincent.leclerc@ynov.com.
Vous devez envoyé UN mail par groupe avec le nom des 2 personnes et un lien vers un git ou sera posé vos sources.
L'heure maximum du rendu est à 18h15 le vendredi 6 décembre 2019, tout mail arrivé après cet horaire ne sera pas corrigé.
UN rendu par groupe.
L'application devra s'éxécuter pour être notée.
Toute absence (non justifiée) de rendu ou retard de rendu entrainera un 0 (ZERO) pour les membres du groupe.
