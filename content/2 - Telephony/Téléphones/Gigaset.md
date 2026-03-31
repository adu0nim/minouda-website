---
title: Gigaset
updated: 2025-07-10 09:38:49Z
created: 2025-07-09 13:21:09Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - téléphone-gigaset
---

## Gigaset
Dépannage C530/N510 Gigaset
REFERENCE ACCUMULATEUR
4NIMH 1.2v 750mA AAA HR03

#### Dépannage Plug & Phone + Reset 

Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de réinitialiser votre téléphone.

1 - Authentifiez-vous sur votre espace client via ce lien :
https://www.ovhtelecom.fr/manager/#/
2 - Cliquez sur "Télécom" dans la barre en haut à gauche
3 - Cliquez sur "Téléphonie" dans la colonne à votre gauche
4 - Sélectionnez le groupe téléphonie concerné
5 - Sélectionnez votre ligne SIP en dessous de votre groupe téléphonie
6 - Cliquez sur "Assistance" sur la page principale.
7 - Cliquez sur "Dépannage Plug & Phone" sur la page principale.
8 - Cochez "Autre - reconfigurer automatiquement votre équipement (mode expert)"
9 - Entrez l'Adresse IP publique de votre modem que vous pouvez récupérer en allant sur http://ifconfig.ovh/
Il faut être sur le même réseau que le téléphone.

Vous allez devoir réinitialiser votre téléphone en suivant la procédure ci-dessous.

1 - Rentrez dans le menu du téléphone
2 - Rentrez dans "Réglages" en bas à droite
3 - Cliquez sur "Système" puis sur "Reset Base"
4 - Rentrez le code PIN (0000 par défaut)

Si votre combiné affiche "Pas de base", ce message indique que le combiné n'est pas associé à la base du siemens. Il faut associer le combiné à la base Siemens, pour cela, il faut aller sur le combiné, Menu > Réglages > Enregistrement > Enreg. Combiné. Le téléphone indique : « Recherche d'une base prête pour enregistrement. » Il faut alors rester appuyer sur le bouton bleu en façade de la base pendant 7 secondes, si le combiné demande un code PIN système, le code est 0000 par défaut.
***
#### Reset Physique

1 - Débrancher électriquement la base
2 - Maintenir le bouton gris enfoncé (bouton central de la base)
3 - Rebrancher tout en maintenant enfoncé le bouton central de la base 30 secondes après rebranchement.

Si votre combiné affiche <Pas de base>, ce message indique que le combiné n'est pas associé à la base du siemens. Il faut vérifier dans un premier temps redémarré électriquement la base du Siemens et vérifier que le voyant bleu soit bien allumé. Ensuite il faut associer le combiné à la base Siemens, pour cela, il faut allez sur le combiné, Menu > Réglages > Enregistrement > Enreg. Combiné. Le téléphone indique : « Recherche d'une base prête pour enregistrement. » Il faut alors rester appuyer sur le bouton bleu de la base jusqu'à ce que le combiné demande de renseigner le code PIN système (0000 par défaut).
****
#### Ligne Fixe :
Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de corriger le défaut avec les appels sortants.

1 - Rentrez dans le menu du téléphone
2 - Rentrez dans "Réglages" en bas à droite
3 - Dans la partie "Téléphonie" puis "Envoi.connexions"
4 - Cliquez sur "INT1" ensuite dans Connexion pour appels sortants, vous pouvez mettre "IP1" et ensuite faire "Sauver"
****
### Code Auto-conf

Pour le code d'auto-configuration sur les Gigaset C530IP :

Voici la procédure pour insérer le code d'auto-configuration dans votre téléphone Gigaset :

1 - Rentrez dans le menu du téléphone
2 - Rentrez dans "Réglages" en bas à droite
3 - Dans la partie "Téléphonie" puis "Assistant VoIP"
4 - Lancez l'assistant VoIP
5 - Sélectionnez le compte "IP1"
6 - Rentrez le code d'auto-configuration ""
7 - Validez les étapes jusqu'à la fin de l'assistant

Suite à l'assistant VoIP, dans certains cas, il est nécessaire de reconfigurer le canal d'appel "IP" pour les appels sortants, voici la procédure :

1 - Rentrez dans le menu du téléphone
2 - Rentrez dans "Réglages" en bas à droite
3 - Dans la partie "Téléphonie" puis "Envoi.connexions"
4 - Cliquez sur "INT1" ensuite dans Connexion pour appels sortants, vous pouvez mettre "IP1" et ensuite faire "Sauver"
***
##### Gigaset N670
Bonjour Monsieur XXXXX,

Je vous confirme la prise en charge de votre demande.
Après verifications, le Gigaset N670 en vient pas s'enregistrer sur nos serveurs et récuperer son fichier de configuration.

Il n'a donc peut être pas la bonne version de firmware.

Avez-vous pu récuperer son adresse IP locale s'il vous plaît ?
Avez-vous pu acceder à son interface web locale ?

Afin de vérifier si le défaut est bien lié à la version du firmware, il vous faut :
Récuperer l'adresse ip locale attribuée au Gigaset
Vous connecter à l'interface web locale du Gigaset avec cette meme adresse IP
Les identifiants par défaut, seront admin / admin
Ensuite pour verifier le firmware : il faut aller dans
Interface —> Setting —> System —> Firmware

Si le firmware est le 2.20 ou inferieur
Je vous invite à forcer la mise à jour du firmware en renseignant l'url suivante :
URL to firmware file : http://gigaset.prov.voip.ovh.net/n670ip/firmwares/2.26.0.bin
Cochez « Immediately »
Cliquez sur « Set »

Une fois le firmware mis à jour la base devrait venir récuperer correctement son fichier de configuration.

N'hésitez pas à me tenir au courant s'il vous plaît.
***
#### V2 - Firmware

Bonjour Monsieur,


Veuillez suivre la procédure ci-dessous pour mettre à jour le firmware de votre base Gigaset N670.

Pour mettre à jour le système, il faut se connecter à l'interface Web du Gigaset N670. L'IP qui a été attribué à la base Gigaset N670 est : 192.168.1.67

1 - Rendez-vous sur l'interface via cette IP (Les identifiants par défaut, seront admin / admin)
2 - Rendez-vous dans le manu "Interface"
3 - Cliquez sur "Setting" puis sur "System"
4 -  Cliquez sur "Firmware"

Je vous invite à forcer la mise à jour du firmware en renseignant l'url suivante dans le champs "URL to firmware file" :http://gigaset.prov.voip.ovh.net/n670ip/firmwares/2.26.0.bin

1 - Cliquez sur "Immediately"
2 - Cliquez sur "Set"

Une fois le firmware mis à jour la base devrait venir récupérer correctement son fichier de configuration. N'hésitez pas à me tenir informé.
***