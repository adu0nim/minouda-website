**Topic** : #byoip 

#### FR
Je reviens vers vous concernant votre range IP qui n'est pas annoncée. À titre d'information, la range BYOIP sera annoncée une fois qu'elle sera routée sur un produit.

L'annonce BGP n'a lieu que lorsqu'un Baremetal/vRack/PCC annonce la gamme BYOIP.

Actuellement, je constate que votre range BYOIP "RANGE" n'est associée à aucun service. C'est pour cette raison que les annonces BGP ne sont pas effectuées.

Je vous suggère donc d'associer votre range BYOIP à un service via votre espace client OVHcloud. Voici le guide:  https://help.ovhcloud.com/csm/en-gb-dedicated-servers-ip-fo-move?id=kb_article_view&sysparm_article=KB0043705

Je reste à votre disposition et vous souhaite une bonne journée.
#### EN
I come back to you about your IP range that is not announced. For your information, the BYOIP range will be announced once it is routed on a product.

The BGP announcement only takes place when a Baremetal/vRack/PCC announces the BYOIP range.

Currently, I see that your range BYOIP "RANGE" is not associated with any service. This is why BGP announcements are not made.

I suggest that you associate your BYOIP range with a service via your OVHcloud customer area. 
Here is the guide : https://help.ovhcloud.com/csm/en-gb-dedicated-servers-ip-fo-move?id=kb_article_view&sysparm_article=KB0043705

I remain at your disposal and wish you a good day.


#### Interne 
##### START / STOP BGP
Reply : 

AFAIK associating the range for the first time will start the announces but dissasiating it from a service wont stop the announcement. Guillaume Leclanche do you confirm ?

* * *
Same as Mathieu, for me the range is announed on backbone only if some part of the range is routed somewhere. So the first routed range triggers annouces on backbone, the last unouted one should disable them (side note: in the past we got one customer how had all IPs in parking, but as one of them was still under VAC protection/firewall, VAC was still anouncing the range, and so was the backbone).
So assuming this is true, customer could indeed use this to control BGP annoucment. 🙂

##### BUG BGP
soucis d'annonces > vérifier les points suivants 

use case > CS11330401 > AS OVH pour le client
- visibilité de la range 
- add a route object
- add an roa/rpki on the AS16276 OR remove the roa/rpki on the other.

lien RIPe : https://stat.ripe.net/resource/31.56.77.0/24#tab=routing 