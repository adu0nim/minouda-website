---
title: Présentation offre Carrier SIP
updated: 2025-07-10 08:07:08Z
created: 2025-07-09 08:12:29Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - carriersip-présentation
---

## Présentation offre Carrier SIP

Qu’est-ce qu’un soft switch de classe 4 ?

Un Softswitch de classe 4 achemine de grands volumes d’appels VoIP généralement interurbains. Pour les entreprises qui souhaitent interconnecter leurs serveurs VoIP, un commutateur de classe 4 est utilisé pour relayer le trafic et les services VoIP sur plusieurs réseaux IP.

Les caractéristiques importantes des switchs de classe 4 sont le support et la conversion du protocole, le transcodage, le taux d’appels par seconde, un temps moyen de routage d’un appel et le nombre d’appels simultanés. Ils fournissent un routage intelligent des appels, ce qui réduit la congestion, la latence et les coûts tout en améliorant la qualité des appels VoIP. Ils ont plusieurs fonctions de sécurité.

De nombreux switchs de classe 4 comprennent également une interface de facturation qui fournit des enregistrements de données d’appel. Ils peuvent filtrer les informations par client, date ou d’autres paramètres pour générer des rapports sur les appels entrants et sortants, les appels non autorisés, le volume de trafic et le routage des appels.

https://blog.kolmisoft.com/what-is-the-difference-between-a-class-4-and-class-5-softswitch/
* * *
##### Présentation Offre

Monsieur,

L'offre Carrier SIP est une solution qui vous permet de gérer de grands volumes d’appels téléphoniques VoIP entrants et sortants. Les avantages proposés par cette solution sont :

- La haute disponibilité : Deux infrastructures totalement indépendantes sont réparties dans nos datacentres de Roubaix et de Strasbourg. Prise en charge de vos communications par l’une des deux plateformes de manière transparente.

- Les routes premium : Vous profitez des routes premium d’OVH, avec une haute qualité de service. Prise en compte de votre service via des routes directes ou par des fournisseurs de qualité vers la destination choisie.

La solution Carrier SIP Trunk s’adresse aux opérateurs télécoms et les professionnels qui utilisent la téléphonie VoIP, consomment plus de 100 000 minutes d’appels sortants par mois et souhaitent devenir opérateurs télécoms. Cette offre est disponible pour les opérateurs télécoms déclarés en France et en Belgique.

Afin de pouvoir utiliser le service, vous devez être en mesure de vous raccorder selon le protocole SIP class 4. OVHCloud met à votre disposition deux adresses IP pour la partie signalisation vous permettant de vous raccorder au service via le réseau Internet, ainsi qu’un lot d’adresses IP pour la partie média.

Le client opérateur reçoit 2 adresses IP qu'il doit whitelister dans ses IPBX. Le service est redondé et hautement disponible : l’une des IP pointe vers le DC de Roubaix, l’autre vers le DC de Strasbourg.

https://www.ovhtelecom.fr/telephonie/carrier-sip-trunk/
****

https://www.sipwise.com/products/class-4-softswitch-c4-carrier-class-hardware/
***
#### Mail envoyé au client à la soucription du service

Bonjour,

Vous avez commandé une offre Carrier SIP et nous vous remercions de votre confiance.

Vous pouvez commencer à écouler vos appels sur votre service, sur vos deux endpoints :

	- Endpoint 1
		-> Localisation  : Roubaix
		-> Votre IP SIP  : 51.210.21.193 (UDP:5060)
		-> IPs Média     : 54.36.215.59,54.36.215.60,54.36.215.61

	- Endpoint 2
		-> Localisation  : Strasbourg
		-> Votre IP SIP  : 46.105.246.97 (UDP:5060)
		-> IPs Média     : 51.77.187.91,51.77.187.92,51.77.187.93


Votre service Carrier SIP est lié à la ligne : LIGNE
C'est sur cette ligne  que nous allons facturer les appels liés à votre service Carrier SIP.


Quelques détails sur nos infrastructures SIP :

	- Codecs supportés      : G711a, G711u, G729

	- Paquetisation         : 20 ms

	- Format des numéros    : E.164 sur les headers From/To/P-Asserted-Identity et dans la Request-URI (exemple : +33123456789)

	- Numéros courts        : Le numéro avec un phone-context du code pays en user param de la Request-URI (exemple : sip:3654;phonecontext=+33@sip.tld ).

	- Appels entrants       : Le traffic entrant sera par défaut réparti en Round-Robin sur vos IPs de signalisation. Le numéro appelé sera aussi en format E.164 dans la Request-URI.



L'accès au support de votre service Carrier SIP s'effectue par ces moyens dédiés :

	- Téléphone : 09 72 12 03 04

	- E-mail    : support.carriersip@ovh.net


Cordialement,

L'équipe OVH Télécom