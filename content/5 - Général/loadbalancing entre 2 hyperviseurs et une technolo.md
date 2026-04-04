---
title: loadbalancing entre 2 hyperviseurs et une technologie qui le fait
updated: 2025-08-06 14:05:27Z
created: 2025-08-06 14:03:57Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
draft: true
---

loadbalancing entre 2 hyperviseurs et une technologie qui le fait 

Pour faire du load balancing entre 2 hyperviseurs, on parle souvent de répartir la charge (VM, trafic réseau, ressources CPU/mémoire) entre plusieurs hôtes physiques afin d’optimiser la performance et la disponibilité.

Load balancing entre hyperviseurs — ça veut dire quoi ?

    Répartir les machines virtuelles (VMs) ou la charge de travail entre plusieurs serveurs physiques (hyperviseurs).

    Assurer que si un hyperviseur est surchargé, d’autres prennent le relais.

    Améliorer la tolérance aux pannes et la haute disponibilité.

Technologie qui permet ça : VMware vSphere Distributed Resource Scheduler (DRS)

    VMware DRS est une fonctionnalité de la suite VMware vSphere.

    Il surveille en continu l’utilisation des ressources (CPU, RAM) sur tous les hôtes ESXi dans un cluster.

    Déplace automatiquement les VMs entre les hyperviseurs (via vMotion) pour équilibrer la charge.

    Assure aussi une haute disponibilité en cas de panne d’un hôte.

Autres exemples similaires :

    Microsoft System Center Virtual Machine Manager (SCVMM) avec Hyper-V pour la gestion et migration dynamique des VM.

    Nutanix AHV propose aussi une gestion intelligente des ressources pour répartir la charge dans un cluster.

ovh le propose ?
Conclusion

    Pour répartir le trafic réseau entre plusieurs serveurs ou instances, le Load Balancer OVHcloud est la solution appropriée.

    Pour répartir les charges de travail entre hyperviseurs ou gérer des clusters, des solutions comme vRack ou Nutanix sont plus adaptées.