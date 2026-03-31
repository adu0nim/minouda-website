---
draft: true
---

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