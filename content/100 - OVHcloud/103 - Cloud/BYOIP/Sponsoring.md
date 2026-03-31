---
draft: false
---
**Topic** : #byoip-sponso

OVHcloud will not support LIR sponsorship.
On the page:
https://www.ovhcloud.com/en-gb/network/byoip/
You can read:
"Maintain the reputation of your IP addresses
Your IP range’s reputation is highly important for massive email activity (marketing, anti-spam, etc.). By bringing your own IP ranges with OVHcloud’s BYOIP service, you will remain responsible for the reputation of your IP addresses."

Le Sponsoring LIR n'est pas inclus dans l'offre, OVH ne gère pas cette partie. On ne peut pas devenir Sponsoring LIR.

Hello, 🙂

Here the customer is complaining about the way we implemented the "import sub range" feature: the sub range needs to be declared on whois, which may or may not be easy depending on RIRs policy.

Here the customer needed to ask RIPE to change the type of their IP range so that they could delcare sub ranges in whois, which allowed customer to import them in different regions (as importing the parent range would restrict the range to be used in one region only).
The customer is complaining about this type change, saying that it cannot be undone, and that it is not ideal regarding their use case, which I don't really understand why.
They offered an alternative method to allow import af a sub range, which I don't think is a good idea.

FYI: we studied different method to allow import of sub ranges (cf https://confluence.ovhcloud.tools/display/2IIP/Importing+sub+range), but for many reasons (one of which was that we were time constrained), the current one was choosen. At the moment, we have no plan of changing it.