---
title: Fonctionnement
updated: 2025-11-19 08:52:12Z
created: 2025-11-19 08:51:19Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

Fonctionnement 


Oui, je connais ces deux offres d’**OVHcloud Connect** : **Direct** et **Provider**. Je te fais un résumé + les points clés, puis je peux te donner des cas d’usage et des conseils si tu veux.

---

## Qu’est-ce que OVHcloud Connect ?

OVHcloud Connect est une solution d’interconnexion privée entre ton infrastructure (data-center, bureau, réseau on-premise) et les ressources dans le cloud OVH (via le vRack OVHcloud). ([OVHcloud][1])
Le but : éviter de passer par Internet public, ce qui améliore la **latence**, la **sécurité**, et la **prévisibilité du débit**. ([OVHcloud][2])

---

## Différences entre les offres **Direct** et **Provider**

### OVHcloud Connect **Direct**

* C’est une connexion **dédiée** (fibre optique) entre ton réseau et l’infrastructure OVHcloud. ([OVHcloud][3])
* Tu peux avoir des débits garantis : par exemple **1 Gbit/s** ou **100 Gbit/s** selon l’offre. ([OVHcloud][1])
* Tarification (pour l’offre “Direct”) : par exemple, à partir de **419 $/mois** pour 1 Gbit/s sur certaines zones. ([OVHcloud][4])
* Le lien est “point à point” vers un PoP OVHcloud (Point of Presence), donc très “proche” du backbone OVH. 
* Niveau de service élevé : cela permet des architectures hybrides (on-premise + cloud) avec des flux privés. ([OVHcloud][5])

---

### OVHcloud Connect **Provider**

* Plutôt conçu pour des architectures **multicloud** : tu peux interconnecter ton réseau + plusieurs clouds (ou plusieurs fournisseurs) via OVH. ([OVHcloud][3])
* La connexion passe via des **fournisseurs tiers** (Equinix, Megaport, Console Connect, etc.). ([OVHcloud][5])
* Les débits garantis vont de **50 Mbit/s** jusqu’à **50 Gbit/s** selon l’option. ([OVHcloud][1])
* Prix : par exemple pour 50 Mbit/s, 49 €/mois selon la page française. ([OVHcloud][1])
* Option redondance possible : attachement à deux PoP pour plus de fiabilité / haute disponibilité. ([OVHcloud][1])

---

## Points communs et bénéfices

* Les deux solutions permettent de **sécuriser le trafic** entre ton infrastructure et OVHcloud, sans passer par Internet public. ([OVHcloud][1])
* Les données transitent via le **vRack** d’OVHcloud : tu peux connecter tes serveurs, tes ressources cloud, etc. dans un réseau privé virtuel. 
* Amélioration de la latence et des performances : flux prévisibles + bande passante garantie. ([OVHcloud][2])
* Déploiement “automatisé” ou simplifié via l’interface client d’OVHcloud. ([OVHcloud][1])
* Large couverture via PoP — OVH a plusieurs Points of Presence (en Europe, Amérique, …) pour ces connexions. ([OVHcloud][3])

---

## Cas d’usage typiques

* **Hybrid Cloud** : tu as un datacenter on-premise + des ressources OVHcloud et tu veux que ton trafic interne passe par une ligne privée.
* **Multicloud** : tu utilises OVH + d’autres clouds (AWS, Azure, GCP, etc.) et tu veux interconnecter tout ça avec une bonne performance et sécurité.
* **Applications sensibles** : BDD, applications critiques qui nécessitent faible latence / haut débit entre tes systèmes et le cloud.
* **Haute disponibilité** : si tu prends l’option redondance (deux PoP), tu peux avoir un lien réseau plus résilient.

---

Si tu veux, je peux te donner **les prix actuels pour les offres OVHcloud Connect Direct et Provider en France** (ou dans ta région), pour avoir une idée des coûts — veux-tu que je fasse ça ?

[1]: https://www.ovhcloud.com/fr/network-security/ovhcloud-connect/?utm_source=chatgpt.com "OVHcloud Connect | OVHcloud France"
[2]: https://www.ovhcloud.com/fr/learn/what-is-direct-connect/?utm_source=chatgpt.com "Qu’est-ce que Direct Connect ? | OVHcloud France"
[3]: https://www.ovhcloud.com/fr/network/ovhcloud-connect/?utm_source=chatgpt.com "OVHcloud Connect | OVHcloud France"
[4]: https://www.ovhcloud.com/en/network/ovhcloud-connect/?utm_source=chatgpt.com "OVHcloud Connect | OVHcloud Worldwide"
[5]: https://corporate.ovhcloud.com/nl/newsroom/news/ovhcloud-connect-evolves/?utm_source=chatgpt.com "OVHcloud Connect evolves to support hybrid and multi-cloud strategies"

-----------
Très bonne question. Techniquement, l’offre **OVHcloud Connect Provider** fonctionne selon plusieurs principes clés que je vais détailler, avec les composants réseau, le routage, et la façon dont l’interconnexion est faite via des fournisseurs tiers (“providers”).

---

## Architecture technique de OVHcloud Connect Provider

1. **PoP (Point of Presence) de fournisseurs tiers**

   * Au lieu d’une liaison “directe OVH-on-premise” comme dans l’offre Direct, la solution Provider repose sur les **PoP de fournisseurs d’interconnexion** : Equinix, Megaport, Console Connect, Orange Business Services, etc. ([OVHcloud][1])
   * Ces partenaires ont des “Meet-Me Rooms” (salles d’échange) dans leurs data centers, où tu peux établir des connexions privées vers OVH. 
   * Les clients utilisent un “virtual circuit” fourni par le provider (ex : Megaport) pour connecter leur infrastructure à un PoP OVH. Dans la LOA (Letter of Authorization), OVH autorise la cross-connexion. 

2. **Niveau 3 (Layer 3) — Routage IP / BGP**

   * L’offre Provider utilise une interconnexion **en couche 3** (OSI L3), donc ce n’est pas juste du “ethernet simple” : il y a du routage IP. ([OVHcloud][2])
   * Il faut établir des **sessions BGP privées** entre ton réseau (ou ton WAN) et OVHcloud. ([OVHcloud][1])
   * Grâce à ces sessions BGP, tu peux annoncer des préfixes IP (ton réseau) vers OVH, et inversement. Cela rend ton réseau “étendu” : ton vRack OVH apparaît comme un “site” dans ton WAN.

3. **Redondance / haute disponibilité**

   * OVH propose d’attacher ton interconnexion à **deux PoP différents** pour assurer la redondance. Cela permet d’avoir un lien résilient au cas où un PoP tombe ou un lien est défaillant. ([OVHcloud][3])
   * Le routage BGP peut être configuré pour répartir la charge (load balancing) et assurer une commutation automatique (failover) en cas de problème. OVH mentionne un SLA (niveau de service) élevé possible (ex : 99,99 %) quand on utilise cette redondance. ([OVHcloud][1])

4. **vRack OVHcloud**

   * La connexion Provider s’interface avec le **vRack** d’OVHcloud : tu attaches ton vRack à la solution Connect Provider. ([support.us.ovhcloud.com][4])
   * Le vRack permet de créer un réseau privé virtuel entre tes ressources OVH (serveurs, instances, etc.) et, via la connexion Provider, ton réseau on-premise ou tes autres clouds.

5. **Types de liens physiques**

   * Le support des connexions se fait via **fibre optique monomode**, avec des modules SFP/SFP+ compatibles (par exemple 1 Gbit ou 10 Gbit selon la configuration). ([support.us.ovhcloud.com][5])
   * Selon le fournisseur (Equinix, Megaport…), tu auras des liaisons “virtual circuits” provisionnées dans leurs PoP, qui sont connectées en back-end au PoP OVH. OVH ne fournit pas le routeur “physique” chez le client : le client doit avoir ses équipements ou les faire héberger par un opérateur dans la salle de colocation du PoP. ([support.us.ovhcloud.com][5])

6. **Provisionnement via le tableau de bord OVHcloud**

   * Une fois l’offre commandée, tu reçois une “service key” (clé de service) par mail. Cette clé sert à finaliser la configuration chez le provider. ([support.us.ovhcloud.com][4])
   * Dans l’interface OVHcloud (Control Panel), tu vas associer la solution Connect Provider à ton vRack, puis configurer les PoP (choix du PoP, attachement L3) via le panneau “OVHcloud Connect”. ([support.us.ovhcloud.com][4])
   * Tu définis la configuration “PoP configuration” : tu choisis L3, la redondance, etc. ([support.us.ovhcloud.com][4])

7. **Sécurité et isolation**

   * Le trafic entre ton réseau et OVH via Connect Provider ne transite pas par l’Internet public : il passe via des liens privés chez le provider, ce qui renforce la sécurité. ([OVHcloud][2])
   * Les VLANs de ton infrastructure on-premise et de ton vRack peuvent être isolés via ton routage et ta configuration BGP, mais attention : en L3, les VLANs ne sont pas “propagés” entre ton datacenter et OVH comme dans une simple liaison L2. OVH indique que “les VLAN ne sont pas partagés” entre PoP dans le cas L3. ([OVHcloud][3])

---

## Cas d’usage typiques (“technical usage”)

* **Multicloud** : tu utilises un autre cloud (par exemple via Megaport ou Equinix) et tu veux que tes workloads (VM, bases de données…) dans ce cloud communiquent de manière privée avec OVHcloud, sans passer par Internet. Connect Provider te permet de le faire avec BGP.
* **Architecture hybride** : ton datacenter on-premise ou ton bureau est connecté via un fournisseur d’interconnexion (ex : Orange, Megaport) à OVH, ce qui te permet d’avoir des flux “privés” plutôt que des tunnels VPN.
* **Réduction des coûts egress (sortants)** : comme le trafic vers / depuis OVH passe sur ce lien privé, cela peut réduire les coûts d’“egress” public (selon ton modèle cloud / facturation) car le trafic n’utilise pas les liaisons publiques Internet.
* **Résilience** : si tu configures une redondance via deux PoP, tu peux mettre en place une architecture tolérante aux pannes (“high availability”) pour tes communications critiques.

---

## Contraintes techniques à prendre en compte

* Tu dois maîtriser **le BGP** : configuration des sessions BGP, annonces de préfixes, politique de routage.
* Tu dois fournir ou utiliser des équipements réseau (routeurs) dans un PoP ou dans ton infrastructure : OVH ne héberge pas ton hardware réseau. ([support.us.ovhcloud.com][5])
* La latence / performance dépendra du fournisseur de PoP que tu choisis (et de sa proximité physique / backbone).
* Si tu veux la redondance, il faudra éventuellement payer pour deux liaisons (deux PoP), et gérer la redondance BGP (BGP multi-homing).
* Dans le contrat ou la LOA, il y a des conditions spécifiques pour réaliser la cross-connexion entre ton provider PoP et OVH PoP. 
* Il faut bien dimensionner le débit : choisir la bande passante (ex : 50 Mbit/s, 100 Mbit/s, jusqu’à plusieurs Gbit/s selon les offres) en fonction de tes besoins. ([OVHcloud][1])

---

Si tu veux, je peux te faire un **schéma réseau** simplifié montrant comment Connect Provider s’intègre dans une architecture multicloud (OVH + un autre cloud) — veux-tu que je fasse ça ?

[1]: https://us.ovhcloud.com/network/ovhcloud-connect/provider/?utm_source=chatgpt.com "Explore OVHcloud Connect Provider"
[2]: https://www.ovhcloud.com/fr/network-security/ovhcloud-connect/?utm_source=chatgpt.com "OVHcloud Connect | OVHcloud France"
[3]: https://www.ovhcloud.com/en/network-security/ovhcloud-connect/?utm_source=chatgpt.com "OVHcloud Connect | OVHcloud Worldwide"
[4]: https://support.us.ovhcloud.com/hc/en-us/articles/6973502587155-How-to-Install-OVHcloud-Connect-Provider-from-the-OVHcloud-Control-Panel?utm_source=chatgpt.com "How to Install OVHcloud Connect Provider from the OVHcloud Control Panel – Support Guides"
[5]: https://support.us.ovhcloud.com/hc/en-us/articles/6980557660819-OVHcloud-Connect-FAQ?utm_source=chatgpt.com "OVHcloud Connect - FAQ – Support Guides"
