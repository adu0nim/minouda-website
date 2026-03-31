---
title: 3 hyperviseurs
updated: 2025-08-06 13:27:56Z
created: 2025-08-06 13:26:57Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

3 hyperviseurs

1. VMware ESXi

    Hyperviseur de type 1 (bare-metal), s’installe directement sur le matériel physique.

    Très utilisé en entreprise pour sa fiabilité et ses fonctionnalités avancées.

    Supporte une large gamme de systèmes d’exploitation invités.

    Partie de la suite VMware vSphere.

2. Microsoft Hyper-V

    Hyperviseur de type 1, intégré dans Windows Server et aussi disponible sur Windows 10/11 Pro.

    Très utilisé dans les environnements Windows.

    Bonnes performances et intégration avec l’écosystème Microsoft.

3. KVM (Kernel-based Virtual Machine)

    Hyperviseur de type 1, intégré directement dans le noyau Linux.

    Open source et largement utilisé dans le monde Linux.

    Supporte de nombreux systèmes invités.

    Base de plusieurs solutions cloud comme OpenStack.

****
   Nutanix n’est pas uniquement un hyperviseur, mais plutôt une plateforme d’infrastructure hyperconvergée qui inclut un hyperviseur parmi ses composants.

   Pour clarifier :

    Nutanix : c’est avant tout un système complet qui combine stockage, calcul, réseau et gestion dans une seule solution intégrée (infrastructure hyperconvergée).

    Hyperviseur Nutanix (AHV) :
    Nutanix propose son propre hyperviseur appelé AHV (Acropolis Hypervisor), qui est basé sur KVM.
    AHV est donc un hyperviseur intégré dans la plateforme Nutanix, mais Nutanix supporte aussi d’autres hyperviseurs comme VMware ESXi et Microsoft Hyper-V.