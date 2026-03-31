---
title: principe du DRP et différence entre rpo et rto
updated: 2025-08-06 14:13:02Z
created: 2025-08-06 14:12:36Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
---

principe du DRP et différence entre rpo et rto
DRP (Disaster Recovery Plan)

    Principe :
    Le DRP est un plan de reprise après sinistre.
    C’est un ensemble de procédures et de mesures définies pour restaurer rapidement les systèmes informatiques et les opérations d’une organisation après un événement catastrophique (incendie, panne majeure, cyberattaque, etc.).

    Objectifs :

        Minimiser les interruptions d’activité.

        Réduire les pertes de données.

        Assurer la continuité ou la reprise rapide des services.

    Contenu typique :

        Évaluation des risques.

        Stratégies de sauvegarde et restauration.

        Rôles et responsabilités.

        Procédures détaillées pour la récupération.

RPO (Recovery Point Objective)

    Définition :
    Le RPO est la durée maximale acceptable de perte de données en cas de sinistre.
    Autrement dit, c’est le point dans le temps jusqu’où on peut récupérer les données sans causer un impact inacceptable.

    Exemple :
    Un RPO de 4 heures signifie que les sauvegardes doivent être faites au moins toutes les 4 heures, sinon on risque de perdre jusqu’à 4 heures de données.

RTO (Recovery Time Objective)

    Définition :
    Le RTO est la durée maximale acceptable pour restaurer un service ou un système après un sinistre.
    C’est le temps que l’entreprise peut se permettre d’être indisponible.

    Exemple :
    Un RTO de 2 heures signifie que le service doit être remis en fonctionnement au maximum 2 heures après la panne.

Différence RPO vs RTO
Critère	RPO (Point de reprise)	RTO (Objectif de temps)
Ce que ça mesure	Quantité de données qu’on peut perdre	Temps maximal d’indisponibilité accepté
Porte sur	La perte de données	La durée d’arrêt du service
Exemple	Sauvegardes fréquentes pour limiter les pertes	Processus rapides de restauration pour réduire l’arrêt