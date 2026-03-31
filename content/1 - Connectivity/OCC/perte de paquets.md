---
title: perte de paquets
updated: 2026-03-11 15:36:18Z
created: 2025-11-20 14:41:53Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

perte de paquets

Point avec le RUN

Si le comportement se produit en passant par le lien OCC, serait-il possible de faire un test croisé pour accéder à votre PCC sans passer par le lien OCC (Via un VPN par exemple) s'il vous plaît ? 

Afin de vous assister au mieux, pourriez-vous me transmettre les informations suivantes : 

- Ping de votre routeur au PoP.
- Ping de chez lui au routeur OCC.
- Ping d'une machine en dehors du Vrack vers le Vrack, pour vérifier si vous avez les mêmes pertes.
- TCPdump entre les machines

Pourriez-vous transmettre le résultat de ces tests s'il vous plaît ? 

Je reste à votre disposition.

----------------------------------------
Pour essayer d'isoler le comportement, faire du ping machine par machine

-ping de chez lui au pop
-ping de chez lui au routeur occ

-Ping d'une machine en dehors du vrack vers le vrack, pour vérifier si il a les même pertes // ça devrait passer par le lien OCC et on pourrait voir si il a les même pertes

Traceroute inutile pour de la pertes de paquets

liaison inter dc/vrack / le lien occ ne serait pas utiliser

ping de chez lui vers 10.42.0.2 // 10.42.0.6 

Demander du détail sur le traceroute
Car il n'y a qu'un saut , il interroge juste la machine voisine
ça ne semble donc pas passer par l'occ car on aurait plus de saut

Ça semble donc rester dans le vrack 