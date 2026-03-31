---
title: modèle osi
updated: 2025-08-06 14:09:58Z
created: 2025-08-06 14:06:17Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

modèle osi 

Bien sûr ! Voici un résumé clair du modèle OSI (Open Systems Interconnection), un modèle de référence en réseaux qui décrit comment les données circulent d’un appareil à un autre à travers 7 couches.

Le modèle OSI en 7 couches
N°	Couche	Nom	Fonction principale
7	Application	Interface utilisateur	Gère les applications réseau (email, web, FTP, etc.)
6	Présentation	Traduction des données	Formatage, chiffrement, compression des données
5	Session	Gestion de session	Établit, gère et termine les connexions entre applications
4	Transport	Transmission fiable	Contrôle de flux, segmentation, retransmission (ex : TCP)
3	Réseau	Routage	Acheminement des paquets (ex : IP)
2	Liaison	Transmission locale	Gestion des erreurs et contrôle du flux sur un lien physique
1	Physique	Transmission physique	Transmission des bits bruts sur le support matériel

À quoi ça sert ?

    Modulariser les fonctions réseau pour faciliter la compréhension, le développement et l’interopérabilité.

    Chaque couche ne s’occupe que de sa fonction spécifique.

    Permet à différents systèmes et protocoles de communiquer ensemble.

Exemple concret

    Quand tu envoies un email :

        La couche Application prépare le message.

        La couche Transport utilise TCP pour s’assurer que le message arrive complet.

        La couche Réseau utilise IP pour envoyer le message à la bonne adresse.

        La couche Physique transmet les bits sur le câble ou le Wi-Fi.

protocole pour chaque couche :

Couche (N°)	Nom	Protocoles courants
7. Application	Applications	HTTP, HTTPS, FTP, SMTP, DNS, POP3, IMAP, SNMP
6. Présentation	Formatage données	SSL/TLS, JPEG, MPEG, ASCII, GIF
5. Session	Gestion session	NetBIOS, SAP, PPTP, RPC
4. Transport	Transport données	TCP, UDP, SCTP
3. Réseau	Routage	IP (IPv4, IPv6), ICMP, OSPF, BGP
2. Liaison	Liaison données	Ethernet, PPP, HDLC, Frame Relay, ARP
1. Physique	Transmission bit	USB, Bluetooth, DSL, IEEE 802.11 (Wi-Fi), RJ45