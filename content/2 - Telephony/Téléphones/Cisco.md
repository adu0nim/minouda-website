---
title: Cisco
updated: 2025-07-09 13:31:08Z
created: 2025-07-09 13:20:02Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - téléphone-cisco
draft: true
---

## Cisco

#### 7841
Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de réinitialiser vos téléphones.

1 - Authentifiez-vous sur votre espace client via ce lien :
https://www.ovhtelecom.fr/manager/#/
2 - Cliquez sur "Télécom" dans la barre en haut à gauche
3 - Cliquez sur "Téléphonie" dans la colonne à votre gauche
4 - Sélectionnez le groupe téléphonie concerné
5 - Sélectionnez votre ligne SIP en dessous de votre groupe téléphonie
6 - Cliquez sur "Assistance" sur la page principale
7 - Cliquez sur "Dépannage Plug & Phone" sur la page principale
8 - Cochez "Autre - reconfigurer automatiquement votre équipement (mode expert)"
9 - Entrez l'Adresse IP publique de votre modem que vous pouvez récupérer en allant sur http://ifconfig.ovh/
Il faut être sur le même réseau que le téléphone.

Vous allez devoir réinitialiser votre téléphone en suivant la procédure ci-dessous.

1 - Appuyez sur le bouton du téléphone avec une roue crantée.
2 - Allez dans le menu "Adm. Appareil".
3 - Selectionnez l'option "Réinit. Usine".
4 - Validez la réinitialisation. Le téléphone va redémarrer et sera à nouveau opérationnel.

Après la remise à l'état d'usine du téléphone, voici la procédure pour initialiser votre téléphone : 
  
1- Récupérez l'adresse IP locale du poste:
2 - Appuyez sur le bouton du téléphone avec une roue crantée.
3 - Rendez vous dans le menu "Status"
4 - Rendez vous dans le menu "Network Status" pour visualiser l'adresse IPv4 qui doit être par exemple "192.168.1.22".    

Ensuite connectez vous sur l'interface web en renseignant l'URL suivante dans la barre d'adresse d'un navigateur :     

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.1.22/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Une fois connecté sur l'interface web rendez vous dans le menu "Voice" puis "Provisionning".
4 - Renseignez, dans le champ Profile Rule l'adresse suivante : http://cisco.prov.voip.ovh.net/cp78xx/update.cfg
5 - Cliquer sur "Submit all Changes".  

En attente de votre retour.

***

#### 8851
Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de réinitialiser vos téléphones.

1 - Authentifiez-vous sur votre espace client via ce lien :
https://www.ovhtelecom.fr/manager/#/
2 - Cliquez sur "Télécom" dans la barre en haut à gauche.
3 - Cliquez sur "Téléphonie" dans la colonne à votre gauche.
4 - Sélectionnez le groupe téléphonie concerné
5 - Sélectionnez votre ligne SIP en dessous de votre groupe téléphonie
6 - Cliquez sur "Assistance" sur la page principale.
7 - Cliquez sur "Dépannage Plug & Phone" sur la page principale.
8 - Cochez "Autre - reconfigurer automatiquement votre équipement (mode expert)"
9 - Entrez l'Adresse IP publique de votre modem que vous pouvez récupérer en allant sur http://ifconfig.ovh/
Il faut être sur le même réseau que le téléphone.

Vous allez devoir réinitialiser votre téléphone en suivant la procédure ci-dessous.

1 - Appuyez sur le bouton du téléphone avec une roue crantée.
2 - Allez dans le menu "Adm. Appareil".
3 - Sélectionnez l'option "Réinit. Usine".
4 - Validez la réinitialisation. Le téléphone va redémarrer et sera à nouveau opérationnel.

Après la remise à l'état d'usine du téléphone, voici la procédure pour initialiser votre téléphone : 
  
1- Récupérez l'adresse IP locale du poste:
2 - Appuyez sur le bouton du téléphone avec une roue crantée.
3 - Rendez vous dans le menu "Status"
4 - Rendez vous dans le menu "Network Status" pour visualiser l'adresse IPv4 qui doit être par exemple "192.168.1.22".    

Ensuite connectez vous sur l'interface web en renseignant l'URL suivante dans la barre d'adresse d'un navigateur :     

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.1.22/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Une fois connecté sur l'interface web rendez vous dans le menu "Voice" puis "Provisionning".
4 - Renseignez, dans le champ Profile Rule l'adresse suivante : http://cisco.prov.voip.ovh.net/cp88xx/update.cfg
5 - Cliquer sur "Submit all Changes".  

En attente de votre retour.
***
#### Initialisation Cisco
Bonjour Monsieur,

Voici la procédure  pour initialiser vos téléphones:    

1- Récupérez l'adresse IP locale du poste:
2 - Appuyez sur le bouton du téléphone avec une roue crantée.
3 - Rendez vous dans le menu Status
4 - Allez ensuite dans Network Status pour visualiser l'adresse IPv4 qui doit être par exemple "192.168.5.89".    

Ensuite connectez vous sur l'interface web en renseignant l'URL suivante dans la barre d'adresse d'un navigateur :    

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.5.89/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Une fois connecté sur l'interface web rendez vous dans le menu "Voice" puis "Provisionning".
4 - Renseignez, dans le champ "Profile Rule" l'adresse suivante : http://cisco.prov.voip.ovh.net/cp88xx/update.cfg
5 - Cliquer sur "Submit all Changes".
***
### ATA 191

Monsieur,

Comme convenu, je vous invite à réinitialiser le boitier ATA191. Pour ce faire, vous pouvez maintenir appuyer l'encoche "Reset" pendant 20 secondes. Ensuite il sera peut-être nécessaire de renseigner le lien de provisionning sur l'interface locale du boitier Cisco. Voici la procédure :      

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.1.22/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Une fois connecté sur l'interface web rendez vous dans le menu "Voice" puis "Provisionning".
4 - Renseignez, dans le champ Profile Rule l'adresse suivante : http://cisco.prov.voip.ovh.net/init.cfg
5 - Cliquez sur "Submit all Changes".  

Si le comportement persiste, je vous invite à faire un test croisé du boitier ATA 191 sur une autre connexion internet.
***
### Cisco SPA5xx
Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de réinitialiser vos téléphones.

1 - Authentifiez-vous sur votre espace client via ce lien :
https://www.ovhtelecom.fr/manager/#/.
2 - Cliquez sur "Télécom" dans la barre en haut à gauche.
3 - Cliquez sur "Téléphonie" dans la colonne à votre gauche.
4 - Sélectionnez le groupe téléphonie concerné
5 - Sélectionnez votre ligne SIP en dessous de votre groupe téléphonie
6 - Cliquez sur "Assistance" sur la page principale.
7 - Cliquez sur "Dépannage Plug & Phone" sur la page principale.
8 - Cochez "Autre - reconfigurer automatiquement votre équipement (mode expert)"
9 - Entrez l'Adresse IP publique de votre modem que vous pouvez récupérer en allant sur http://ifconfig.ovh/
Il faut être sur le même réseau que le téléphone.

Vous allez devoir réinitialiser votre téléphone en suivant la procédure ci-dessous.

1 - Appuyez sur le bouton du téléphone avec une feuille pliée.
2 - Allez dans le menu "14 - Factory Reset / Réinitialisation usine".

Le téléphone va redémarrer et sera vierge de toute configuration

Après la remise à l'état d'usine du téléphone, voici la procédure pour initialiser votre téléphone : 

1 - Appuyez sur le bouton du téléphone avec une feuille pliée.
2 - Appuyez ensuite sur le touche "9".
3 - Notez l'adresse IP affichée sur l'écran à la ligne "Current IP".

Ensuite connectez vous sur l'interface web en renseignant l'URL suivante dans la barre d'adresse d'un navigateur :     

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.1.22/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Cliquez sur le bouton "Provisioning" en haut de la page
4 - Sélectionnez "Yes" dans le champ "Provision enable"
5 - Entrez la valeur suivante : http://cisco.prov.voip.ovh.net/init.cfg Dans le champ "Profile Rule" 
6 - Cliquer sur "Submit all Changes".  

Le téléphone va ensuite redémarrer et se reconfigurer.
****
### SPA 112
Bonjour Monsieur,

Veuillez suivre la procédure ci-dessous afin de réinitialiser votre boitier Cisco.

1 - Débranchez le boîtier du réseau (câble Ethernet)
2 - Décrochez le combiné
3 - Composez ****
4 - Attendez le voix en anglais dans le combiné
5 - Poursuivez à composer 73738# finissez par 1
6 - Raccrochez
7 - Laissez le SPA112 dans l'état pendant deux minutes.

Vous allez devoir ensuite envoyer le fichier de configuration au téléphone en suivant la procédure ci-dessous.

1 - Authentifiez-vous sur votre espace client via ce lien :
https://www.ovhtelecom.fr/manager/#/.
2 - Cliquez sur "Télécom" dans la barre en haut à gauche.
3 - Cliquez sur "Téléphonie" dans la colonne à votre gauche.
4 - Sélectionnez le groupe téléphonie concerné
5 - Sélectionnez votre ligne SIP en dessous de votre groupe téléphonie
6 - Cliquez sur "Assistance" sur la page principale
7 - Cliquez sur "Dépannage Plug & Phone" sur la page principale
8 - Cochez "Autre - reconfigurer automatiquement votre équipement (mode expert)"
9 - Entrez l'Adresse IP publique de votre modem que vous pouvez récupérer en allant sur http://ifconfig.ovh/
Il faut être sur le même réseau que le téléphone.

Ensuite, il faut récupérer l'IP locale de votre adaptateur Cisco:

1 - Décrochez le combiné
2 - Composez ****
3 - Attendez le voix en anglais dans le combiné
4 - Composez 110#
5 - La voix en anglais reprend en énumérant les chiffres qui composent l'adresse IP locale (notez que les points se disent "dot").
6 - Notez l'adresse IP locale

Votre adresse IP locale est composé de 4 nombres compris entre 0 et 254, sauf configuration réseau particulière, elle debutera par 192.168.

Ensuite connectez vous sur l'interface web en renseignant l'URL suivante dans la barre d'adresse d'un navigateur :     

1 - http://ip_du_poste/admin/advanced  donc  par exemple "http://192.168.1.22/admin/advanced"
2 - Les identifiants du poste par défaut sont admin/admin
3 - Une fois connecté sur l'interface web rendez vous dans le menu "Voice" puis "Provisionning".
4 - Renseignez, dans le champ Profile Rule l'adresse suivante : http://cisco.prov.voip.ovh.net/init.cfg
5 - Cliquer sur "Submit all Changes".  
***