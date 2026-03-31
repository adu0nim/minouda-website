---
title: Storage - Formation
updated: 2025-07-22 07:22:54Z
created: 2025-07-21 07:16:10Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

## Storage - Formation
Volume / Risques / Complexité / Coûts 
##### Block storage 
Stockage haute performance > Besoin de calcul 
> Disque additionnel
> Big Data / HPC / IA ml
> Triple réplication intégrée avec Ceph (Change en fonction du type d'Infra 1AZ / 3AZ)
> 
##### Object Storage 
Gestion des données non structurées / Données qui ont rarement besoin d'être modifiées 
> Logs > data > streaming multimedia
> Fonctionnement avec fichier manifeste
> S3 compatibilité avec Amazon
> Swift Hautement évolutif / Pas de SPOF
> Connexion par token
>
> 
L'API affiche uniquement 1000 objets (Atelier / Manager/ API)
##### Cold Archive \ Cloud archive
Données peu utilisées 
> Bulletin de salaire
> Archives réglementaire
> Stockage à long terme \ Sauvegarde de rétention 
> Solution hors réseau 
> Patienter jusqu'à 12h pour récupérer les données. > Cloud archive > Swift
> Cold archive > S3 > Jusqu'à 48h pour récupérer les données 
>  6 mois d'engagement minimum sinon pénalité (Cold archive)
> Basé sur le stockage sur bande magnétique
> Faible conso carbone et matériel durable
> 
***
Rescue > Investion du disque principal et secondaire

****
Sauvegarde > Sorti de prod
Réplication > Données disponible à plus endroits pendant la prod 
****
Monitoring Host > Possibilité de chercher avec le SRV NAME
> Ça peut permettre de comparer l,Utilisation de l'instance avec l'host en question

##### Volume Snapshot 
Pour **Capturer** l'état des informations d'un volume à un moment T.
>Stocker sur le même cluster que le volume
>Copie du disque
>Utile pour redéployer une nouvelle instance avec la même **image**

Différent de **Volume Backup** > Extraction des données et stocké en object storage sur un autre cluster mais sur la même region.
> Utile pour faire un rollback de son instance / volume
> Automatisé
> Attention au partitionnement du backup car il faudra le respecter pour recréer une instance à partir de ce backup