---
title: différence udp tcp ?
updated: 2025-08-06 14:06:09Z
created: 2025-08-06 14:05:33Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

différence udp tcp ?

TCP (Transmission Control Protocol)

    Connexion orientée : établit une connexion fiable entre l’émetteur et le récepteur avant d’échanger les données.

    Fiable : garantit que les données arrivent correctement et dans l’ordre (retransmission des paquets perdus).

    Contrôle de flux : régule la vitesse d’envoi pour éviter de saturer le récepteur.

    Utilisé pour : applications nécessitant une transmission sûre comme le web (HTTP/HTTPS), les emails (SMTP), les transferts de fichiers (FTP).

UDP (User Datagram Protocol)

    Sans connexion : envoie les données sans établir de connexion préalable.

    Non fiable : ne garantit pas la réception des données, ni leur ordre. Pas de retransmission automatique.

    Faible latence : plus rapide et léger que TCP car moins de contrôle.

    Utilisé pour : applications où la rapidité prime sur la fiabilité, comme le streaming vidéo/audio, les jeux en ligne, la voix sur IP (VoIP).