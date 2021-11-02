# Votre application de lecture
**Exercice: Validation par étapes**  
Vous devrez créer un interface permettant de naviguer entre 4 étapes. L'ensemble des étapes permettra de créer un profil utilisateur complet (ses infos, son adresse de livraison, les thèmes ou produits choisis). Une fois le profil soumis, La dernière étape servira de récapitulatif du profil avant validation et donc soumission par l'internaute. Une fois le profil soumis, vous pourrez afficher un message personnalisé à l'internaute.

## Fonctionnement

L'application est codée en module js.  
A chaque formulaire un contrôle de formulaire est réalisé.  
A chaque étape les données sont enregistrées dans le session storage.  
A la 4ème étape, après validation le profil est enregistré dans le localStorage (pour simuler une BD).  

## plus

Les champs sont pré-remplis mais peuvent être modifiés.  
L'email doit être unique.
Quand les contrôles ne sont pas passés, un message d'erreur est envoyé à l'utilisateur.
