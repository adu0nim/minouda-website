---
title: Region IMPAIR > PCI
updated: 2025-07-10 15:11:37Z
created: 2025-07-10 13:02:15Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
draft: true
---

Region IMPAIR > PCI
Region PAIR > VPS

Openstack > asynchrone > il envoie une action et doit attendre qu'elle soit ternminée pour en lancer une autre 

extnet> interface réseau publique d'OpenStack qui permet à l'instance d'accèder à internet dès sa création
ce n'est pas natif d'Openstack
c'est du made in ovh

security group > permet de gérer les règles de sécurité de l'instance 
20 règles par défaut
pernet aussi de gérer les fraudeurs

--- shelved > stoppe l'instance pour ne plus être facturé
un snapshot est créé
unitile en facturation au mois . car le mois est payé
à la recréation, l'instance peut changer d'host mais pas de région

openstack server list
Openrc-client.sh > Fichier de connexion au cli openstack

licence windows > 

Instance flex > disque 50go max et ne peut pas être modifié // permet de switcher d'une flavor flex à une autre 

#### Atelier PCI
- Quota > possible de chercher par flavor
couleur correspond au stock
logo json > détail des quotas
> on peut y voir les règles d'acceptation ou non du quota
> ne pas donner au client

- Infra / History > voir les stocks de flavor
> ne pas donner les chiffres

Sonde oco permet de connaitre l'état de l'host
si host ko, le client reçoit un mail pour lui dire qu'il est migré sur un autre host, pas besoin de contacter le support

****

si ça marche en mode RESCUE c'est que l'host fonctionne > donc pas de soucis chez OVH
si rescue kO> Potentiellement un soucis chez nous
Laisse en mode RESCUE > et RUN 