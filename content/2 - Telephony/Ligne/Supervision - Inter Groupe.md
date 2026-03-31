---
title: Supervision - Inter Groupe
updated: 2025-07-10 09:46:04Z
created: 2025-07-10 09:45:40Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - line-supervision-inter
---

## Supervision - Inter Groupe
Bonjour,

Veuillez trouver ci-dessous la méthode pour configurer de la supervision silencieuse inter-groupes.

- Rendez-vous sur https://api.ovh.com/console/
- Connectez-vous à l'aide du bouton "Login" (en haut à droite).
- Une fois connecté, rendez-vous dans la rubrique /telephony 

Voici un exemple pour configurer la supervision silencieuse entre deux lignes de groupe différents via les API :

- La ligne 0033972000001 est dans le groupe XY1234-ovh-1
- La ligne 0033972000002 est dans le groupe XY1234-ovh-2
1 ⇒ Je défini xy1234-ovh-1 en tant que groupe enfant de xy1234-ovh-2.
- API à utiliser : POST /telephony/{billingAccount}/billingAccountSite
+ billingAccount : xy1234-ovh-1
+ billingAccountSite : xy1234-ovh-2
Je clique sur "Execute".

Le groupe xy1234-ovh-2 est maintenant parent du groupe xy1234-ovh-1.
2 ⇒ Je configure la touche 1 du téléphone de 0033972000001 pour superviser 0033972000002.

- API à utiliser : PUT /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
+ billingAccount : xy1234-ovh-1
+ keyNum : 1
+ serviceName : 0033972000001
+ function: SUP0
+ parameter: 0033972000002
La touche 1 du téléphone associé à la ligne 0033972000001 permet désormais la supervision silencieuse de la ligne 0033972000002. Cette méthode étant illustrée par un exemple, il vous suffit d'appliquer la même méthode avec vos propres services. En espérant répondre à vos attentes.
