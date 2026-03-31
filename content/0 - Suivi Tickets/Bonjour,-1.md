---
title: Bonjour,
updated: 2026-03-13 10:17:43Z
created: 2026-03-13 10:17:42Z
latitude: 48.85661400
longitude: 2.35222190
altitude: 0.0000
---

Bonjour,

Service : 13a96bc8-924a-41a2-bd04-e81884dc6e4f
Informations : Sopra Steria nous indique avoir des pertes de paquets entre Telehouse et OVH RBX via l'OCC 

Il a vérifié avec FortiGate et Palo Alto TAC, et selon leur analyse, le problème semble être dans le chemin utilisé pour connecter le voisin (neighbor), qui est le lien OCC OVH.

Test de ping  depuis Telehouse avec les IPs 10.42.0.1 & 0.5 vers OVH RBX

64 bytes from 10.42.255.66: icmp_seq=456 ttl=64 time=8.4 ms
64 bytes from 10.42.255.66: icmp_seq=457 ttl=64 time=11.4 ms
64 bytes from 10.42.255.66: icmp_seq=458 ttl=64 time=15.0 ms
64 bytes from 10.42.255.66: icmp_seq=460 ttl=64 time=6.9 ms
^C
--- 10.42.255.66 ping statistics ---
461 packets transmitted, 442 packets received, 4% packet loss
round-trip min/avg/max = 4.4/7.3/26.7 ms

---
64 bytes from 10.42.178.145: icmp_seq=350 ttl=126 time=4.9 ms
64 bytes from 10.42.178.145: icmp_seq=351 ttl=126 time=6.5 ms
64 bytes from 10.42.178.145: icmp_seq=352 ttl=126 time=5.5 ms
64 bytes from 10.42.178.145: icmp_seq=353 ttl=126 time=5.5 ms
^C
--- 10.42.178.145 ping statistics ---
354 packets transmitted, 349 packets received, 1% packet loss
round-trip min/avg/max = 4.6/6.8/24.9 ms

64 bytes from 10.42.177.98: icmp_seq=286 ttl=126 time=4.9 ms
64 bytes from 10.42.177.98: icmp_seq=287 ttl=126 time=4.8 ms
64 bytes from 10.42.177.98: icmp_seq=288 ttl=126 time=5.5 ms
64 bytes from 10.42.177.98: icmp_seq=289 ttl=126 time=5.8 ms
^C
--- 10.42.177.98 ping statistics ---
290 packets transmitted, 285 packets received, 1% packet loss
round-trip min/avg/max = 4.6/6.3/25.0 ms

64 bytes from 10.42.178.146: icmp_seq=350 ttl=126 time=6.0 ms
64 bytes from 10.42.178.146: icmp_seq=351 ttl=126 time=5.5 ms
64 bytes from 10.42.178.146: icmp_seq=352 ttl=126 time=7.0 ms
^C
--- 10.42.178.146 ping statistics ---
353 packets transmitted, 349 packets received, 1% packet loss
round-trip min/avg/max = 4.7/6.6/39.0 ms


Les IPs; 
- 10.42.177.98
- 10.42.178.146
- 10.42.178.145
- 10.42.255.66

Ces IP sont hébergées sur Roubaix et l’IP voisine est 10.42.0.2 & 10.42.0.6
Le client Ping depuis Telehouse avec les IPs 10.42.0.1 & 0.5 vers OVH RBX

Le client a 4% de pertes de paquets 

Possible de check pourquoi ils ont ces pertes de paquets svp ? 

Bonne journée
Damien