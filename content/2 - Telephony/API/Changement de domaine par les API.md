---
title: Changement de domaine par les API
updated: 2025-07-10 09:47:43Z
created: 2025-07-10 09:47:38Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - api-domaine-sip
---

##### Changement de domaine par les API
Pour modifier le domaine d'une ligne SIP, il est possible de le faire via les API. Voici la manipulation : 

1 - Rendez-vous sur https://eu.api.ovh.com/
2 - Cliquez sur "Explore the OVH API"
3 - Cliquez sur "Login" en haut à droite
4 - Connectez-vous avec votre compte OVH
5 - Rendez-vous ensuite sur cette API : https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options~PUT

Voici les champs à renseigner sur l'API : 

- billingAccount : 
- serviceName : 
- domain : 

Vous pouvez ensuite valider en cliquant sur "Execute".