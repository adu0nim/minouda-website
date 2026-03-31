---
title: vlan
updated: 2025-08-06 14:12:31Z
created: 2025-08-06 14:11:41Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

vlan

Bien sûr ! Voici ce qu’il faut savoir sur les VLANs (Virtual Local Area Networks) :

Qu’est-ce qu’un VLAN ?

    Un VLAN est un réseau local virtuel qui permet de segmenter un réseau physique en plusieurs réseaux logiques distincts.

    Chaque VLAN fonctionne comme un réseau indépendant, même si tous les équipements sont connectés au même switch physique.

Pourquoi utiliser des VLANs ?

    Sécurité : isoler des groupes d’utilisateurs ou de services pour limiter les accès.

    Performance : réduire le trafic broadcast et améliorer l’efficacité du réseau.

    Gestion simplifiée : organiser le réseau par service, département, ou fonction sans changer le câblage.

    Flexibilité : déplacer facilement des utilisateurs d’un VLAN à un autre via configuration logicielle.

Comment ça marche ?

    Chaque trame Ethernet reçoit un tag VLAN (généralement via la norme IEEE 802.1Q).

    Le switch utilise ce tag pour identifier à quel VLAN appartient la trame.

    Le trafic VLAN est isolé : un poste dans un VLAN ne communique pas directement avec un autre VLAN sans routage.

Exemple concret

    Dans une entreprise, tu peux avoir :

        VLAN 10 pour le service comptabilité

        VLAN 20 pour le service marketing

        VLAN 30 pour les invités

Chaque groupe est isolé, même s’ils utilisent les mêmes équipements physiques.

VLANs et routage inter-VLAN

    Pour que des VLANs différents communiquent entre eux, il faut un routeur ou un commutateur de couche 3 qui fait du routage inter-VLAN.