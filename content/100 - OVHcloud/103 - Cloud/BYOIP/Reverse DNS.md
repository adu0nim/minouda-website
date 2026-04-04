---
draft: true
---
**Topic** : #byoip 
#### FR
Je reviens vers vous concernant l'utilisation des Reverse DNS sur certaines IPs.

Lors de la livraison de votre tranche IP BYOIP, nous créons des zones ARPA sur nos serveurs DNS et toute modification de reverse DNS via l'espace client ou l'API OVHcloud y sera appliquée. Ces modifications seront visibles au public lorsque nos serveurs DNS auront reçu les délégations des zones ARPA par le RIR (ceci est facultatif, si vous voulez continuer à gérer votre reverse DNS par vous-même, vous pouvez le faire).

L'information est présente dans ce guide : https://help.ovhcloud.com/csm/fr-network-bring-your-own-ip?id=kb_article_view&sysparm_article=KB0044867#en-pratique

Suite à la validation de votre commande BYOIP, vous avez reçu par e-mail ces zones ARPA. Le mail a pour objet : "Delivery of your Bring your own IP addresses as Additional IPs product on RANGE". Il a été envoyé le [DATE].

Si vous souhaitez utiliser l'espace client OVHcloud pour effectuer un reverse DNS avec votre range BYOIP "RANGE", vous devez déclarer les zones ARPA OVHcloud dans votre RIR. Cette configuration est visible via ce lien sur le RIR : https://stat.ripe.net/resource/XXXXX/24#tab=dns

En revanche, si vous souhaitez gérer la configuration vous même sans passer par OVHcloud, vous devez contacter votre RIR. Voici la page d'explication du RIPE : https://docs.db.ripe.net/Database-Support/Configuring-Reverse-DNS/#reverse-dns-overview

Je reste à votre disposition et vous souhaite une bonne journée.
#### EN
I come back to you regarding the use of Reverse DNS on some IPs.

When delivering your BYOIP IP Range, we create ARPA zones on our DNS servers and any reverse DNS modification via the OVHcloud customer area or OVHcloud API will be applied to it. These changes will be visible to the public when our DNS servers have received the ARPA zone delegations from the RIR (this is optional, if you want to continue managing your reverse DNS yourself, you can do so).

Information is in this guide: https://help.ovhcloud.com/csm/fr-network-bring-your-own-ip?id=kb_article_view&sysparm_article=KB0044867#en-pratique

Following the validation of your BYOIP order, you have received by e-mail these ARPA areas. The subject of the email is "Delivery of your Bring your own IP addresses as Additional IPs product on RANGE". It was sent on [DATE].

If you want to use the OVHcloud client space to perform a reverse DNS with your BYOIP "RANGE" range, you must therefore declare the OVHcloud ARPA zones in your RIR. This configuration is visible via this link on the RIR: https://stat.ripe.net/resource/XXXXXX/24#tab=dns

However, if you want to manage the configuration yourself without going through OVHcloud. you must contact your RIR. Here is the RIPE explanation page: https://docs.db.ripe.net/Database-Support/Configuring-Reverse-DNS/#reverse-dns-overview

I remain at your disposal and wish you a good day.