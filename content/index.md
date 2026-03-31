---
title: Mes prises de notes
---
##Installer Qwartz pour la prise de note avec Obsidian - Gestion d'un site statique
git clone https://github.com/jackyzha0/quartz.git
cd quartz/
***
##MAJ NPM::
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 22.13.0
nvm use 22.13.0
***
npm i
npm audit fix
npx quartz create
Choix d'options pour la création
npx quartz build --serve
***
##Themes

https://github.com/saberzero1/quartz-themes
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh
chmod +x action.sh
./action.sh nom_du_theme
***
##Héberger son site sur Github
git remote -v
https://quartz.jzhao.xyz/setting-up-your-GitHub-repository
git remote set-url origin git@github.com:adu0nim/obsidian-website

This is a blank Quartz installation.
See the [documentation](https://quartz.jzhao.xyz) for how to get started.
