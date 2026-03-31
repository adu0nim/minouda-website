---
title: Dépannage
updated: 2025-07-10 09:00:08Z
created: 2025-07-10 08:57:30Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - occ-dépannage
draft: true
---

#### Dépannage
Up/ Down -> Donne info sur le lumière 
Actions :
Lock / Unlock -> Déverouille ou vérouille le port 
New diag port -> Permet de faire un dignostic, donne les infos du edge 

Pop configuration : New diag peering > ?
- Permet de se rediriger vers le evpnID -> Pour avoir des infos sur les Edge.

Datacenter configuration :
- New dia peering -> Permet d'avoir des infos sur le edge 

Sur le EVPN -> On peut voir sur quel port est connecté l'OCC
Le main ou le backup
Sur un use case l'OCC était connecté  sur le edge de backup qui était down 

Net if status ->  permet d'avoir l'état du port de l'edge

***
Interface down
Signifie qu'il n'y a aucun échange entre les équipements du client (Routeur) et les équipements OVH (le EDGE)
***
Changement automatique de port SFP si les valeurs de IN et OUT sont infèrieur à -7db  -30db
→ A partir de -15 db on peut demander le changement de SFP  >> QUIZZ
***