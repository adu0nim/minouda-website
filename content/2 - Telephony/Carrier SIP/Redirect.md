---
title: Redirect
updated: 2025-07-10 07:57:14Z
created: 2025-07-10 07:56:26Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - carriersip-redirect
draft: true
---

## Redirect
Bonjour,

Je constate que les alias ne sont pas correctement configurés vers le Carrier SIP, ce qui génère le message "Numéro non attribué" lors des appels entrants sur ces numéros. 

À notre niveau, il existe 2 types de redirection : "redirect" et "ddi". Pour rediriger un alias vers un Carrier SIP, il faut utiliser la fonction "redirect". Pour configurer un alias en redirect vers un CarrierSIP, je vous invite à utiliser les API.

Pour cela, rendez vous sur :
https://eu.api.ovh.com/console/#/telephony
Loguez vous en haut à droite, puis utilisez :
POST /telephony/{billingAccount}/number/{serviceName}/changeFeatureType

1/ En renseignant les champs ainsi :
-billingAccount : (votre groupe CarrierSIP - XXXXX)
-serviceName : (l'alias à configurer - XXXXXX)
-featureType : redirect

2/ Rediriger l'alias vers le CarrierSIP, en renseignant les champs ainsi :
POST /telephony/{billingAccount}/redirect/{serviceName}/changeDestination

-billingAccount : (votre groupe CarrierSIP - XXXXXX)
-serviceName : (l'alias à configurer - XXXXXX)
-destination : (votre numéro de CarrierSIP - XXXXXX)

Dites-moi s’il y a autre chose que je puisse faire pour vous.

Notre équipe reste à votre disposition.
Bonne journée.