---
title: Infos tunnel VPN
updated: 2025-07-10 10:20:44Z
created: 2025-07-10 10:20:27Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
draft: true
---

## Infos tunnel VPN

On essaie d’éviter les explications trop techniques sur le fonctionnement de l'OTB.
Déjà parce que le produit évolue rapidement mais aussi parce qu'il est suffisamment compliqué comme ça..

Mais ok, ouvrons le capot !! :)

Pour commencer, Il y a deux technos d’agrégation dans l'OTB:
  - MPTCP: basé sur le TCP, qui permet d’agréger uniquement les connexions TCP.
  - MUD: basé sur l'UDP: qui permet d’agréger tous les protocoles.

MPTCP essaie de maximiser le débit en essayant de garder une bonne latence alors que MUD essaie de minimiser la latence en essayant de garder un bon débit.

Il y a ensuite trois technos pour sécuriser vos communications:
  - shadowsocks: un proxy TCP.
  - glorytun-tcp: un VPN basé sur le protocole TCP.
  - glorytun-udp: un VPN basé sur MUD.

Ainsi en passant par shadowsocks et glorytun-tcp, on optimise le débit alors qu'en passant par glorytun-udp on optimise la latence.

À partir de là, il est facile de comprendre les trois modes:
  - glorytun: glorytun-tcp sur tun0 et xtun0.
  - MUD: glorytun-udp sur tun0 (pas de xtun0).
  - glorytun + MUD: glorytun-tcp sur tun0 et glorytun-udp sur xtun0.

Quand on fait de la QoS, on essaie de classifier les communications pour qu'elles passent dans le tunnel le plus adéquat (tun0 ou xtun0).

J'ai passé sous silence certains détails techniques (dscp, upload...) mais cela n’empêche pas la compréhension des différents modes.

Cordialement.