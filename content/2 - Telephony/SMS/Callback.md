---
title: Callback
updated: 2025-07-10 09:31:12Z
created: 2025-07-10 09:06:44Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - sms-callback
---

## Callback

Bonjour à tous,

Je sais que le sujet date, mais j'ai vraiment galéré pour trouver ma réponse alors j'apporte ma petite brique. Merci aussi à tous car ce forum m'a pas mal aidé. Il faut dire que la documentation est éparpillée, incomplète et parfois obsolète. Autant OVH fait d'excellentes choses, autant la doc et le support des SMS, c'est vraiment pas ça.

Bref, pour définir un callback à la réception d'une réponse, j'ai procédé ainsi :
1 je définis la callback :
PUT /<ApiVersion>/sms/<ServiceName>
BODY : { "smsResponse": { "responseType": "cgi", "cgiUrl": "https://monserveur.com/macallback" } }

2 J'envoie mon SMS en mode "senderForResponse" (ça, c'est bien documenté).
3 Je traite ma callback.

Pour ça, il faut savoir que l'on est appelé en POST et que l'on reçoit les paramètres suivants :
-- id : l'identifiant du message
-- keyword : pour moi c'est un identifiant OVH
-- message : le message de la réponse
-- senderid : le numéro du téléphone source
-- shortcode : le numéro court d'appel
-- tag : votre tag d'origine
A priori, il fut un temps où Keyword était le premier mot du message.

Enfin, attention à ne pas confondre la callback qui indique l'état de la réception du message et celle qui notifie d'une réponse à son message.

Si ça aide quelqu'un... :)
Merci, Jérôme.

Forum https://community.ovh.com/t/Callback-ex%C3%A9cuter-%C3%A0-la-r%C3%A9ception-de-chaque-SMS/2966/7

***
En recherche de la documentation concernant le callback, je vois que les informations sont à minima difficiles à trouver.

Voici ce que j'ai encore dans mes archives:

 Pour un suivi personnalisé des accusés de réception SMS (dlr), il est possible de spécifier une URL dite de "CallBack". Cette dernière sera appelée avec l'ensemble des arguments suivants :

 La personnalisation de l'URL de CallBack? est accessible via le menu : "Options générales" du manager.

 Lorsque le statut d'envoi du SMS est mis à jour, nous appelons l'URL spécifiée. Les valeurs suivantes sont automatiquement insérées dans la querystring :

 id
 L'id du SMS

 ptt (Premium Tracking Technical)
 Le PTT est un code qui correspond à un état très précis du SMS. Les états possibles sont les suivants :
 1 => Intermediate state notification that the message has not yet been delivered due to a phone related problem but is being retried.
 2 => Used to indicate that the message has not yet been delivered due to some operator related problem but is being retried within the network.
 3 => Used to indicate that the message has been accepted by the operator.
 4 => The message was delivered.
 5 => The message has been confirmed as undelivered but no detailed information related to the failure is known.
 6 => Cannot determine whether this message has been delivered or has failed due to lack of final delivery state information from the operator.
 8 => Used when a message expired (could not be delivered within the life time of the message) within the operator SMSC but is not associated with a reason for failure.
 20 => Used when a message in its current form is undeliverable.
 21 => Only occurs where the operator accepts the message before performing the subscriber credit check. If there is insufficient credit then the operator will retry the message until the subscriber tops up or the message expires. If the message expires and the last failure reason is related to credit then this error code will be used.
 23 => Used when the message is undeliverable due to an incorrect / invalid / blacklisted / permanently barred MSISDN for this operator. This MSISDN should not be used again for message submissions to this operator.
 24 => Used when a message is undeliverable because the subscriber is temporarily absent, e.g. their phone is switch off, they cannot be located on the network.
 25 => Used when the message has failed due to a temporary condition in the operator network. This could be related to the SS7 layer, SMSC or gateway
 26 => Used when a message has failed due to a temporary phone related error, e.g. SIM card full, SME busy, memory exceeded etc. This does not mean the phone is unable to receive this type of message/content (refer to error code 27).
 27 => Used when a handset is permanently incompatible or unable to receive this type of message.
 28 => Used if a message fails or is rejected due to suspicion of SPAM on the operator network. This could indicate in some geographies that the operator has no record of the mandatory MO required for an MT.
 29 => Used when this specific content is not permitted on the network / shortcode.
 33 => Used when the subscriber cannot receive adult content because of a parental lock.
 39 => New operator failure
 73 => The message was failed due to the ported combinations being unreachable.
 74 => The message was failed due to the MSISDN being roaming.
 76 => The message was failed due to the ported combinations being blocked for client (the client has been blacklisted from the ported destination).
 202 => The message was failed due to the ported combinations being blocked for the client. Please contact Client Support for additional information.

 date
 La date du "dlr"

 description
 L'id du dlr qui correspond à la description ci-dessous.

 descriptionDlr
 La description du status du dlr :
 0 => Creating or pending
 1 => Success
 2 => Failed
 4 => Waiting
 8 => Buffered
 16 => Error (not billed)

Source : https://github.com/ovh/docs/issues/1496

Doc OVH : https://help.ovhcloud.com/csm/fr-sms-users?id=kb_article_view&sysparm_article=KB0051417#etape-5-specifier-une-url-de-callback

****
#### CGI
Forum : https://community.ovh.com/t/callback-executer-a-la-reception-de-chaque-sms/2966/7

Pour définir un callback à la réception d'une réponse, vous pouvez procéder ainsi : 

1 - Définition du callback : 

PUT /<ApiVersion>/sms/<ServiceName>
BODY : { "smsResponse": { "responseType": "cgi", "cgiUrl": "URL" } }

2 - Envoi du SMS en mode "senderForResponse".
3 - Traitement du callback :

Pour ça, l'appel se fait en POST et on reçoit les paramètres suivants :
-- id : l'identifiant du message
-- keyword : Identifiant OVH
-- message : le message de la réponse
-- senderid : le numéro du téléphone source
-- shortcode : le numéro court d'appel
-- tag : votre tag d'origine

https://www.ovh.com/sms/options/smsResponse-ox440-1.cgi