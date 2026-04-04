---
title: SIP Vicious
updated: 2025-07-10 09:45:20Z
created: 2025-07-10 09:44:14Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - line-vicious
draft: true
---

## SIP Vicious
Bonjour Monsieur    

Tout d'abord veuillez nous excuser pour le délai de réponse à votre ticket (mail).   

Ce type de comportement est généralement du SIP Vicious. Le SIP Vicious est une manière de pirater votre ligne afin d'émettre des appels gratuitement depuis votre ligne téléphonique. Le SIP Vicious étant effectué pour passer des appels vers des numéros à valeur ajouté ou internationaux il est conseillé de mettre en place :    

- Une sécurisation du réseau, par exemple au niveau firewall, le SIP Vicious étant avant tout un problème réseau.
- Une restriction SIP par IP. ( https://docs.ovh.com/fr/voip/restreindre-ligne-sip-par-ip/ ).
- Une Liste blanche/noire. ( https://docs.ovh.com/fr/voip/comment-configurer-les-renvois-d-appels/#activer-le-filtrage-dappels ).
- Ne pas laisser des interfaces web (ou ssh, telnet, etc) ouvertes côté internet.
- Eviter d'exposer les ports 5060 et 5962 c'est par là que passent les attaques.
- Mieux vaut utiliser le nat du routeur qui va déterminer un port aléatoire entre 1025 et 65535.

Vous pouvez aussi consulter notre guide : https://docs.ovh.com/fr/voip/securiser-ligne-sip/     
Je vous souhaite une bonne journée.     

***
#### V2 -Sécurité

Bonjour Monsieur,

Veuillez trouver ci-dessous le guide donnant certaines informations permattant de sécuriser votre service VoIP.

Lien : https://docs.ovh.com/fr/voip/securiser-ligne-sip/
***