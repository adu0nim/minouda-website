---
title: CDR OBE
updated: 2025-07-10 08:33:20Z
created: 2025-07-10 08:32:14Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - obe-cdr
draft: true
---

## CDR OBE

OBE récupère chaque mois son fichier CDR via un FTP.
L'équipe PU VOIP envoie le fichier sur le sftp d'orange BE tous les 1 du mois logiquement.

##### Exemple : 
https://jira.ovhcloud.tools/browse/TELSD-2130
[Wed Mar 1 19:00:02 2023] [Info ] [mj696337-ovh] Found these files to send for monthly :
[Wed Mar 1 19:00:02 2023] [Info ] [mj696337-ovh] /home/ovh/tools/orangebe/CSV/mj696337-ovh/todo/OVH_FixedPhone_call_details_022023.zip
[Wed Mar 1 19:00:02 2023] [Info ] [mj696337-ovh] We must send : /home/ovh/tools/orangebe/CSV/mj696337-ovh/todo/OVH_FixedPhone_call_details_022023.zip
*****
#### Analyse via Graylog
https://gra159.logs.ovh.com/streams/5989cb44ea83ed00017dd291/search?q=%22mj696338-ovh%22+AND+%22+%5BWarn+%5D%22&rangetype=relative&streams=5989cb44ea83ed00017dd291&relative=7200

On peut voir ce type de message sur MOGZ : 

Pour une erreur de DL, il ne trouve pas le fichier

2023-06-02 08:19:03 +00:00	{"name":"mozg-voip1.rbx-a.eu-west1.ha.ovh.net"}
[Fri Jun  2 10:19:03 2023] [Warn     ] [mj696338-ovh-76122]      <message key='default'>Service BILLINGACCOUNT not found Internal error: non unique object</message>
