**Topic** : #byoip 
#### BYOIP instance 

Suivi case CS11389713
Can't move BYOIP ip block to an instance

In the meantime, can you try to:
1) Move the IP block in the project with the API:
- https://eu.api.ovh.com/console/? section=%2Fip&branch=v1#post-/ip/-ip-/move

Without any nexthop, only the public cloud project in the 'to' parameter.

2) Attach the IPs with specific Cloud API calls:
- https://eu.api.ovh.com/console/? section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/ip/failover