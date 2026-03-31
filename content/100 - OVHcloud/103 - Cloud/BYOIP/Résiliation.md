**Topic** : #byoip 
#### FR
Chère équipe ,

Je reviens vers vous concernant la résiliation du service BYOIP "RANGE".

Voici le guide pour demander la résiliation de vos services : https://help.ovhcloud.com/csm/fr-billing-how-to-cancel-services?id=kb_article_view&sysparm_article=KB0042834

La résiliation débute à la date de renouvellement du service, c'est à dire au premier du mois suivant.
Toutefois, vous pouvez demander la résiliation immédiate via les API, voici la procédure :

1 - Connectez-vous sur la page web des API OVHCloud : https://api.ovh.com/
2 - Vérifiez le nom du service à résilier. Utilisez le call API suivant : GET /ip/service
3 - Pour résilier le service, utilisez le call API suivant : POST /ip/service/{serviceName}/terminate
Remplir les champs comme ceci :
- serviceName : le nom du service Additional IP/BYOIP obtenu via le call API précédent.

Vous recevrez ensuite un e-mail vous demandant de confirmer la résiliation. La résiliation sera effective après confirmation.

Je reste à votre disposition et vous souhaite une bonne journée.
#### EN
Dear team,

I am getting back to you regarding the termination of the BYOIP 'RANGE' service.

Here is the guide to requesting the termination of your services: https://help.ovhcloud.com/csm/fr-billing-how-to-cancel-services?id=kb_article_view&sysparm_article=KB0042834

The termination begins on the date of renewal of the service, that is to say the first of the following month. However, you can request immediate termination via the APIs, here is the procedure:

1 - Log in to the OVHCloud APIs webpage: https://api.ovh.com/
2 - Check the name of the service to be terminated. Use the following API call: GET /ip/service
3 - To terminate the service, use the following API call: POST /ip/service/{serviceName}/terminate

Fill in the fields like this:
- serviceName: the Additional IP/BYOIP service name obtained via the previous API call.

You will then receive an email asking you to confirm the termination. The termination will be effective after confirmation.

I remain at your disposal and wish you a good day.