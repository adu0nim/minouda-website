---
title: Fichier CDR
updated: 2025-07-10 10:04:02Z
created: 2025-07-08 15:42:28Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - carriersip-cdr
---

## Fichier CDR

Premiére étape :
Télécharger le fichier CSV
Ouvrir le fichier 
Sélectionner la colonne A 
Cliquer sur l'onglet "Données" puis sur "Convertir" :
	- Sélectionner "Délimité" puis cliquer sur "Suivant".
	- Cocher "Tabulation" et "Virgule" puis cliquer sur "Suivant".
	- Choisir le format "Texte" pour chaque colonne, puis cliquer sur "Terminer". La page charge et le tableau s'affiche.


Deuxième étape :
Sélectionner toutes les colonnes de A à N
Cliquer sur "Accueil"
Cliquer sur "Mettre sous forme de tableau"
Choisir la couleur souhaitée 
Cocher "Mon tableau comporte des en-têtes" puis "OK". Le tableau s'affiche avec des champs filtres.

Fichier CSV volumineux :

Commande linux pour séparer les fichiers CSV en morceaux de 500000 lignes :
split -l 500000 nomdufichier.csv