---
slug: commenter-les-fichiers-json
published: 2024-08-12
author: Arnaud POINTET
keywords: JSON, VS Code
title: Commenter les fichiers json.
cover: img/content/commentaire-dans-les-fichiers-json/cover.jpeg
sitemap:
  loc: /blog/commenter-les-fichiers-json
  lastmod: 2024-08-12
  changefreq: monthly
---
Certains vous diront qu'un code bien écrit n'a pas besoin de commentaires. Cependant, la complexité de certaines structures, méthodes ou algorithmes nous oblige parfois à expliciter ce que fait notre code.

<!--more-->

# Pourquoi commenter ?

Lorsque l'on écrit du code, tout semble clair à l'instant T. Mais qu'en est-il lorsque nous y revenons 15 jours, 3 mois, ou 2 ans plus tard ? Pire encore, comment réagira un collègue qui doit lire et comprendre notre production ?

Pour préserver la santé mentale de tous, la plupart des langages de programmation intègrent un système de commentaires (/\*, <!--, #, etc.). Cependant, il n'est pas possible de commenter directement nos fichiers JSON, car la norme ne le permet pas.

# La solution à ce problème

Heureusement, il existe une solution pour commenter nos fichiers JSON grâce à un plugin pour VS Code : [Json Comments Extension](https://github.com/zhangfisher/json_comments_extension).

## Installation

L'installation est très simple. Le plugin est disponible sur la marketplace de VS Code.

![](img/content/commentaire-dans-les-fichiers-json/install.jpg)

Un simple clic sur "Installer" et l'extension est immédiatement disponible dans votre éditeur.

## Usage

Son utilisation est tout aussi intuitive. Placez le curseur de la souris sur l'élément que vous souhaitez commenter pour faire apparaître une popin "+ Add comment".

![](img/content/commentaire-dans-les-fichiers-json/add-comment.JPG)

Tous les utilisateurs ayant installé l'extension pourront alors voir le commentaire.

![](img/content/commentaire-dans-les-fichiers-json/comment.JPG)

Les commentaires sont ajoutés dans le fichier package.json sous une section spécifique :

```json
"json-comments": {

  "tips": "Please install the JsonComments plugin to enable commenting functionality for JSON files, see: [https://github.com/zhangfisher/json\_comments\_extension](https://github.com/zhangfisher/json_comments_extension)",
  "package.json": {
    "[scripts.build](http://scripts.build)": "Build the app"
  },
  "pages/test.json": {
    "[person.name](http://person.name)": "Nom de la personne"
  }
}
```

Lorsque le commentaire concerne un fichier autre que package.json, il est stocké au même endroit que ce fichier.

# Conclusion

Il est toujours préférable de maintenir un code clair et compréhensible en soi, mais n'oubliez pas que vous ne travaillez pas seul. Vos collègues vous en seront reconnaissants si vous laissez des commentaires utiles.