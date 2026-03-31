---
title: Mode bridge TG605s/628s
updated: 2025-07-10 10:06:50Z
created: 2025-07-10 10:04:30Z
source: https://confluence.ovhcloud.tools/pages/viewpage.action?pageId=95134573
---

### Configuration du modem en Bridge depuis son interface
Source : https://confluence.ovhcloud.tools/pages/viewpage.action?pageId=95134573
***
>A savoir

>Afin d'obtenir un mode bridge optimal, il est conseillé d'avoir le modem en configuration neutre. N'hésitez pas à effectuer un reset de celui-ci et ensuite d'appliquer la configuration ci-dessous.
****


- Brancher un ordinateur directement sur le modem en ethernet et connectez-vous à l'administration du modem en saisissant sa passerelle dans un navigateur Internet (par défaut [http://192.168.1.254)](http://192.168.1.254%29)
- Vous accédez à l'interface **"Thomson Gateway"** (Cf. ci-dessous)
![31059dd9286fdb3ca3de81ab5f1a5c80.png](../../_resources/31059dd9286fdb3ca3de81ab5f1a5c80.png)
- Dans le menu latéral, cliquez sur **"Thomson Gateway"** puis **"configuration"**
- En page de la page principale cliquez sur le lien **"Save or Restore Configuration"** (Cf. ci-dessous)  
![adc0fcc6f17bd6c225a4a601cde0deff.png](../../_resources/adc0fcc6f17bd6c225a4a601cde0deff.png)
- Dans la partie "Restore saved configuration" charger le fichier \*.ini que vous avez téléchargé puis cliquez sur "**Restore Configuration Now...**"  
![3c841d515b0926c67e0630b59e502311.png](../../_resources/3c841d515b0926c67e0630b59e502311.png)
- Après une validation de votre demande, une barre de loading vous indiquera l'avancement du chargement de configuration  
![add68bcaaa8870c002467eba74196264.png](../../_resources/add68bcaaa8870c002467eba74196264.png)
- Une fois le modem redémarré, celui-ci sera en mode Bridge sera effectif. N'ayant pas de ports WAN dédié, l'un des quatre ports peut être utilisé pour port WAN.