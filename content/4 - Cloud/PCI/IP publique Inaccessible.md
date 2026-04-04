---
title: IP publique Inaccessible
updated: 2026-03-18 16:24:25Z
created: 2026-03-18 16:24:03Z
latitude: 48.856614
longitude: 2.3522219
altitude: 0
draft: true
---

IP publique Inaccessible 

Chère équipe KMSE,

Je reviens vers vous concernant une IP publique inaccessible pour une nouvelle instance. 

Je suis navré, je constate que vous avez supprimée cette instance 92977cde-6ffe-4705-8012-b9ffb4bb3804.

Si vous souhaitez refaire une analyse, il faudrait nous partager les étapes de création de votre instance et la manière dont vous l'avez configuré.

Il est possible que le cloud-init n’ait pas récupéré les détails pour Ext-Net IP et donc le système d’exploitation était inaccessible de l'extérieur puisque l’interface n’a peut-être pas été configurée au niveau du système d’exploitation.

En général, c’est accessible lors du déploiement, mais vous avez mentionné que vous aviez utilisé une IP fixe, peut-être que cela a été fait via Horizon ou OpenStack, mais,  l’IP n’était pas disponible dans le pool pour le type de réseau Ext-Net.

Je reste à votre disposition.

source : CS15253122