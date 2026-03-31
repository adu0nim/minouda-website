---
draft: true
---
**Topic** : #byoip 
#### Cx asks me :

"Can you include in your routing table that your AS number AS16276 takes precedence over the other from Microsoft AS8075, it is only used as fail-over. Or do we just set this on our virtual firewall hanging on the vrack and lifting one vpn tunnel to microsoft for the fail over?
For your information our vrack number has the following data:
AS214545
import: from AS16276 accept ANY
export: to AS16276 announce AS214545
import: from AS8075 accept ANY
export: to AS8075 announce AS214545"

Is it possible to manage this point on our side or is it up to the customer to manage this configuration?
#### Réponse PU : 
Hello 

1. We don't do custom configuration for customers.
2. Customer agreed upon ordering (order pop up and contract) that his range should not be announced anywhere else than in/by OVH.


That said:
3. As said in the guide (https://help.ovhcloud.com/csm/en-network-bring-your-own-ip?id=kb_article_view&sysparm_article=KB0044856), customers are free not to meet this prerequisite, but we won't be able to ensure a working network configuration, it will be up ot the customer to ensure that everything will be working, and OVH will not offer support/help to fix potential network issue.