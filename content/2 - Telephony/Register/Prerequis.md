---
title: Prerequis
updated: 2025-10-06 10:09:31Z
created: 2025-10-06 07:25:46Z
latitude: 48.914155
longitude: 2.285369
altitude: 0
draft:
---

## Prerequis 

Voici les pré-requis réseau pour un fonctionnement optimal de votre téléphonie :

- Le trafic vers le réseau 91.121.128.0/23 doit être autorisé.
- Le trafic doit être autorisé sur les ports 5060 et 5962 en UDP.
- La plage de ports 30000 à 40000 en UDP doit être ouverte (ports RTP, plage de son).
- La durée de vie des sessions UDP (Time/Timeout/NAT Session) doit être supérieure ou égale à 180 secondes.
- Si elle est disponible, la fonction SIP ALG doit être désactivée.
- Si elle est disponible, la fonction CGN (Carrier Grade Nat) doit être désactivée.

Pour obtenir une qualité de communication optimale, assurez vous que les valeurs suivantes sont bonnes :
- Le débit disponible recommandé est de 100kbps par ligne (envoi ET réception).
- La gigue* idéale est inférieure à 5ms (La gigue est la variation de la latence : la téléphonie est extrêmement sensible à ce paramètre.).