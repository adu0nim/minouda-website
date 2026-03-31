---
title: Endpoint
updated: 2025-07-09 08:17:23Z
created: 2025-07-08 15:44:26Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - carriersip-endpoint
---

## Endpoint
Exemple pour vérifier si Endpoints client est bien testée :
- dig +short SRV _sip._udp.k24.carriersip.voip.ovh.net 
Si client en TCP :
- dig +short SRV _sip._tcp.k24.carriersip.voip.ovh.net 
puis
- host endpoint-206.k24.carriersip.voip.ovh.net 

→ Uniquement pour les entrants 
* * *

## Demande d'ajout endPoint :
Demander au client si l'IP est pour les appels sortants uniquement ou si en plus il veut être sollicité sur cette IP pour faire des appels entrants 
Si il souhaite appel entrant, il faut lui demander quelle priorité il souhaite.

Plus la priorité est basse, plus le endpoint est prioritaire
A priorité égal, plus le poids est important, plus il prend d'appel 

Endpoiint entrant -> 7
* * *
## Gabarit run
Bonjour,

Service : Ligne - k50
Endpoint : IP
Protocole : TCP ou UDP

Demande : Le client demande à ajouter l'IP "" (Protocole) dans la whitelist de son CarrierSIP (k).
L'IP sera destinée à faire uniquement des appels sortants.

Bonne journée,
Damien
* * *
## Réponse client

Monsieur,

L'IP "adresse "a bien été autorisée. Les appels sortants en provenance de cette IP sont maintenant autorisés sur notre infrastructure. L'IP ne sera pas sollicitée lors d'appels entrants. 

Pour ce qui concerne les destinations autorisées, elles seront identiques aux autres IP car les restrictions sont appliquées sur votre service Carrier SIP et donc sur tous les appels sortants en provenance de vos IP autorisées.

* * *

# Use Case Config
-Priorité 1 : 91.201.106.5 (IP de production).
-Priorité 2 : (IP de test).
-Priorité 10 : 217.15.81.7 (IP de production).
-Priorité 20 : (IP de test).

Cela vous permettra de gérer de manière autonome le fonctionnement de la disponibilité des IP.
* * *