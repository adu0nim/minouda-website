---
title: Redirection DDI
updated: 2025-07-08 15:30:41Z
created: 2025-07-08 15:30:31Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - api-redirection-ddi
---

## Redirection DDI

Voici la procédure :

1 - Connectez-vous sur https://api.ovh.com/ via le bouton "Explore the OVH API" puis "Login" en haut à droite
2 - Rendez-vous sur cette API : https://api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/changeFeatureType~POST

Voici les paramètres :

- billingAccount : pj105201-ovh-15
- serviceName : 0033546996111 
- featureType : ddi

Vous pouvez ensuite cliquez sur "Execute". Ensuite vous devez choisir la cible de la redirection.

1 - Rendez-vous sur cette API : https://api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi/%7BserviceName%7D/changeDestination~POST

- billingAccount : ry24465-ovh-1
- serviceName : 0033546996111
- destination : La ligne ou le trunk vers lequel vous souhaitez redirigé l'alias.

Il est important d'effectuer cette configuration avec l'identifiant (NIC) "Administrateur" ou "Technique" du service VoIP.
