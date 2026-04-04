---
title: Commande OBE - Plus de numéros dispo
updated: 2025-07-30 15:09:33Z
created: 2025-07-09 10:34:03Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - obe-no-numéro
draft: true
---

## Commande OBE - Plus de numéros dispo

Bonjour l'équipe Orange Belgique,

Le message d'erreur semble indiquer qu'il n'y a pas de numéro disponible dans la zone géographique sélectionnée.

Toutefois, il est possible que vous n'ayez pas indiqué la bonne tranche de numéro. 
Vous pouvez indiquer à AlphaNetwork qu'il faut utiliser cette API "GET /telephony/number/detailedZones" pour récupérer la tranche de numéros disponible sur une zone géographique. Cela permettra ensuite de générer la commande VoIP sur la bonne tranche de numéros.

Voici les paramètres à renseigner dans l'API : 
- axiom : Laisser vide si vous souhaitez récupérer toutes les tranches de numéros de chaque zone géographique. Sinon préciser un code postal.
- country = be

Pourriez-vous, s'il vous plaît, effectuer une nouvelle tentative de commande en utilisant l'API ci-dessus pour récupérer la bonne tranche ? 

Si le défaut persiste, pouvez-vous m'indiquer l'adresse exacte du titulaire afin de tenter de reproduire le comportement s'il vous plaît ?

En complément, il est important de vérifier régulièrement la liste des tranches de numéros disponibles pour une zone géographique car elles peuvent changer régulièrement en fonction de la disponibilité des numéros.

Je reste à votre disposition et je vous souhaite une bonne journée.