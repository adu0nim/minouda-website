---
title: 407 authentication required
updated: 2025-11-17 10:01:38Z
created: 2025-11-17 09:59:40Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

407 authentication required

> OBE indique que les recherches sont en court de leur côté > semble lié à un type de modem (type CGA technicolor)
>>OBE a testé d'ouvrir qq port (5060) et forward du traffic UDP vers ATA > >cela fonctionne (cela fonctionne sans pb sur d'autres modem)
>>>OBE nous autorise à informer les agents qu'il exite un workaround côté OBE 


"Suite à mon entretien avec des responsables techniques Orange Belgique, il est possible que le défaut d'appels sortants soit lié au modem de type Technicolor.
Selon leurs informations, il existe une méthode de contournement en mettant en place une redirection du trafic UDP vers l'ATA et en ouvrant certains ports.
Pourriez-vous, s'il vous plait, vérifier de votre côté ?" 


666 V2 ------

FYI / Pb d'appel sortant OBE :
Le work around, pour les cas d'appels sortants, appliqué pour certains clients ne fonctionnait pas
OBE a depuis identifié le rootcause d'origine dans le modem qui est en cours de fixe côté OBE, via modification de fichier de config

> Si de nouveau cas arrive chez nous, il faut inviter l'agant à vérifier le version modem et si c'est bien le dernier software (pour rappel, le modem concerné chez OBE est le modem 3 (technicolor))

Chère équipe Orange Belgique,

Je reviens vers vous concernant une problématique au niveau des appels sortants. Après analyse sur mes outils, je constate des erreurs "407 authentication required" dans la capture SIP des appels sortants.

Suite à une réunion avec les responsables d'Orange Belgique, il nous a été indiqué que le comportement est lié à la version firmware du modem (technicolor). 

Je vous suggère de vérifier avec les équipes techniques si le firmware du modem est bien à jour sur la bonne version.

Je reste à votre disposition et vous souhaite une bonne journée.
