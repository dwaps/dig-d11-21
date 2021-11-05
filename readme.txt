*************************************************************************************
*                                                                                   *
*              TP pour le cours de HTML / CSS / BootStrap / JavaScript              *
*                     Projet réalisé par Jean-Philippe FRANCISCO                    *
*                                                                                   *
*************************************************************************************


1. Version HTML / CSS  => branche __hcb (à rendre avant le 30/10/2021)
*************************

    En 2018, j'ai acheté une moto de 125cm3 et je me suis découvert une passion pour les balades en moto.
    En 2020, j'ai obtenu mon permis A2 qui m'autorisait à acheter une moto de grosse cylindrée.

    C'est à  cette occasion que j'ai découvert la marque Royal Enfield.
    Cette ancienne marque de moto anglaise (aujourd'hui gérée par une entreprise indienne) propose aujourdhui
    des motos au look classique, à la mécanique rustique et fiable et à des tarifs très compétitifs.

    J'ai donc acquis une Royal Enfield Interceptor 650 dont je suis très satisfait.
    La concession qui me l'a vendu a déjà un site (https://www.ormotors.fr/), mais avec un design "perfectible".

    Lors de la présentation du projet à réaliser, j'ai tout de suite pensé à cette concession...
    en gardant l'idée de pouvoir par la suite leur vendre ce site.

    Certains éléments du site reprennent les informations officielles de la concession :
    - repère Google Maps
    - les coordonnées
    - Les Conditions Générales de Vente
    - Le lien Facebook
    - Le lien Instagram

    Tous les autres éléments ont été collectés auprès de divers concessionnaires de motos.


1. Version JavaScript => branche __js (à rendre avant le 06/11/2021)
************************

    a. Afficher des marqueurs sur la carte de dernière section.
    -----------------------------------------------------------

        En restant dans la même logique (cf. ci-dessus), j'ai souhaité ajouter dans une carte en provenance de
        OpenStreetMap, la liste des concessionnaires qui distribuent les motos de la marque Royal Enfield (dont
        Ormotors à retrouver au niveau du Val d'Oise).

        Je suis donc allé chercher sur le site officiel Royal Enfield, la liste des concessionnaires et j'ai créé un
        fichier JSON.

        En affichant tous les repères, j'ai constaté qu'il y avait trop de repères et la carte était illisible.
        J'ai donc décidé de rajouter une liste déroulante avec toutes les régions de France.
        L'utilisateur garde la possibilité d'afficher tous les concessionnaires de France.

        Enfin, j'ai également rajouté la fonctionnalité de regroupement des repères proposés par markercluster.js pour
        améliorer la lisibilité des repères.


    b. Simuler une connection utilisateur via le formulaire se trouvant à côté de la carte.
    ---------------------------------------------------------------------------------------

        Comme demandé, j'ai réalisé un écran de connection au niveau de la zone "Nous contacter".
        Afin de pouvoir ajouter des jeux d'essais, j'ai également créé un écran d'inscription.
        Enfin, lorsque l'utilisateur se connecte, un message personnalisé s'affiche avec le bouton "Se déconnecter"

        Etant donné qu'il était précisé de ne pas faire aussi complexe que celui réalisé en cours,
        je me suis permis de ne pas utiliser un routeur, mais de "jouer" uniquement avec les classes des éléments HTMLs.

        Par ailleurs, il est évident que la classe User est fortement inspiré de celui du TP, même si j'y ai apporté de
        nombreuses adaptations personnelles.

        De plus, j'avoue ne pas avoir pris trop de temps à finaliser le CSS de cette dernière partie, notamment au
        niveau de la position des boutons.
        
        
Pour le reste, je pense avoir assez commenté le code pour comprendre ce qui a été fait ;-)

A noter que j'ai regroupé tous les éléments des classes dans des zones en commentaires (il me semble que c'était en C#
que j'utilisais #region & #endregion). Les constructeurs se retrouvent donc en plein milieu de la classe alors
qu'habituellement, cette méthode spécifique se trouve au début de la classe.

Bonne "revue de code" !
