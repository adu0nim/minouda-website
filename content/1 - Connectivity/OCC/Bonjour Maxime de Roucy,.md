---
title: Bonjour Maxime de Roucy,
updated: 2025-11-21 08:40:53Z
created: 2025-11-21 08:40:52Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

Bonjour Maxime de Roucy,

Je reviens vers vous concernant la mise en service de votre lien OVHcloud Connect. Je suis navré pour le délai de réponse.

Dans votre configuration actuelle, l’adresse IP 10.46.0.51 appartient au Private Network Public Cloud. Ces adresses ne sont pas des routeurs : elles ne peuvent pas accepter de trafic externe ni servir de next hop.

La passerelle 10.46.0.1 routant uniquement à l’intérieur du Private Network, l’API OVHcloud refuse donc logiquement son utilisation comme next hop.

Concernant les règles de routage, vous pouvez utiliser aussi bien BGP que des routes statiques :

- avec BGP, aucun routeur n’est créé automatiquement côté OVHcloud.

- OVHcloud Connect ne peut pas injecter du trafic directement dans un Private Network Public Cloud sans un routeur intermédiaire.

Il est donc nécessaire de déployer une machine faisant office de routeur dans votre infrastructure Public Cloud.
Cette machine assurera le rôle de next hop et permettra d’établir la session BGP ou de traiter les routes statiques entre OVHcloud Connect et votre Private Network.

Si vous le souhaitez, vous pouvez demander à être accompagné par notre service Professional Services pour la mise en place et la configuration de ce routeur. Voici le lien : https://www.ovhcloud.com/fr/professional-services/

Je reste à votre disposition et je vous souhaite une bonne journée.