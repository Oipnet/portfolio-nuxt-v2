---
slug: se-passer-de-framework-pour-plus-de-securite
published: 2025-09-24
author: Arnaud POINTET
keywords: Sécurité supply chain, No framework PHP, Symfony composants, Framework PHP, Composer PHP, Dépendances PHP, Sécurité open source, Micro-kernel Symfony, Bonnes pratiques PHP
title: "Faut-il se passer de framework pour plus de sécurité ?"
cover: img/content/se-passer-de-framework-pour-plus-de-securite/cover.png
sitemap:
  loc: /blog/se-passer-de-framework-pour-plus-de-securite
  lastmod: 2025-09-24
  changefreq: monthly
  priority: 0.8
---

En septembre 2025, un incident marquant a touché l’écosystème npm. Josh Junon, un mainteneur bien connu sous le pseudonyme "qix", a été victime d’une attaque de phishing. Cela a permis aux attaquants d’injecter du code malveillant dans 18 packages très populaires, représentant plus de 2,6 milliards de téléchargements par semaine. Ces paquets, comme debug, chalk ou ansi-styles, ont été compromis et contenaient un malware visant les transactions de crypto-monnaies.

<!--more-->

Pour plus de détails, vous pouvez consulter l’[article complet](https://www.trendmicro.com/en_us/research/25/i/npm-supply-chain-attack.html).

Le problème n’est pas nouveau. En 2024 déjà, XZ Utils, un outil de compression très répandu sur la plupart des installations Linux, a été la cible d’une attaque [CVE-2024-3094](https://nvd.nist.gov/vuln/detail/cve-2024-3094). Un attaquant, sous le nom de "Jia Tan", s’est fait passer pour un développeur légitime et a inséré un code malveillant, permettant une exécution de code à distance via SSH. Heureusement, l’incident a été détecté par Andres Freund avant un déploiement massif. Pour ceux qui souhaitent en savoir plus, vous pouvez [consulter l’article](https://www.akamai.com/blog/security-research/critical-linux-backdoor-xz-utils-discovered-what-to-know).

Ces exemples montrent que ce n’est pas un problème limité à un seul écosystème comme npm. Même si, pour l’instant, Composer dans l’univers PHP n’a pas été touché, il est tout à fait possible que ce genre de menace s’étende. C’est donc une question qui concerne tous les développeurs, et il est important de réfléchir aux approches qu’on peut adopter pour se protéger.

---

# L’approche no-framework : pour qui, pourquoi, comment ?

L’approche no-framework s’adresse principalement aux développeurs qui recherchent un contrôle total sur leur code et qui veulent une solution très légère, sans dépendances externes. C’est une approche intéressante pour les petits projets, les outils internes ou les contextes où l’on veut vraiment maîtriser chaque aspect du développement.

**Avantages :**
- Maîtrise complète du code
- Aucune dépendance externe
- Réduction drastique des risques de supply chain
- Légèreté et flexibilité

**Inconvénients :**
- Temps de développement plus long
- Nécessité de tout maintenir soi-même
- Pas de fonctionnalités "clés en main"
- Difficile à faire évoluer pour des projets plus complexes

En choisissant cette approche, on élimine totalement les risques liés aux dépendances externes. Aucun package tiers ne peut être compromis : la sécurité repose uniquement sur la qualité de son propre code.

---

# L’approche composants : construire son propre framework léger

Dans cette approche, on n’adopte pas un framework monolithique, mais on utilise simplement des composants comme ceux proposés par Symfony. Cela permet de garder une grande liberté tout en s’appuyant sur des briques robustes et éprouvées. Avec Symfony, on peut même suivre une approche « micro-kernel », où l’on assemble juste les composants dont on a besoin pour créer son propre mini-framework sur mesure.

Symfony nous présente dans sa documentation comment construire son micro-framework basé sur [micro-kernel](https://symfony.com/doc/current/configuration/micro_kernel_trait.html).

**Avantages :**
- Flexibilité accrue
- Utilisation de briques fiables et éprouvées
- Possibilité d’évoluer progressivement
- Bon compromis entre liberté et sécurité

**Inconvénients :**
- Configuration plus complexe
- Pas de conventions « prêtes à l’emploi »
- Risque de réinventer progressivement un framework complet

Ici, le risque existe, mais il reste limité. On réduit la surface d’attaque en choisissant peu de composants, dont le périmètre est connu et maîtrisé. Chaque dépendance est identifiable et peut être suivie facilement.

---

# L’approche full framework : robustesse et écosystème

Enfin, il existe l’approche full framework, illustrée par Symfony ou Laravel. Ici, on profite d’un écosystème complet, de conventions établies et de nombreux outils prêts à l’emploi. C’est l’approche la plus répandue pour les projets ambitieux nécessitant une forte maintenabilité.

**Avantages :**
- Gain de temps important
- Conventions et bonnes pratiques intégrées
- Communauté large et réactive
- Sécurité renforcée par un suivi actif

**Inconvénients :**
- Courbe d’apprentissage plus élevée
- Potentiellement plus lourd pour des petits projets
- Dépendance forte vis-à-vis du framework choisi

L’utilisation d’un framework complet implique une surface d’attaque plus importante, car on embarque de nombreuses dépendances. La vigilance est donc essentielle : mises à jour régulières, outils d’audit (OWASP Dependency-Check, Snyk, Dependabot) et veille de sécurité sont incontournables.

---

# Bilan

Au final, il n’existe pas de solution universelle. Chaque approche a ses avantages et ses inconvénients. Le choix dépendra du contexte : un petit projet interne pourra se satisfaire d’un no-framework, une application personnalisée pourra tirer parti d’une approche par composants, tandis qu’un projet complexe nécessitera souvent un full framework.

Quelle que soit l’approche choisie, la vigilance autour de la supply chain reste primordiale. La clé, c’est de trouver l’équilibre entre sécurité, flexibilité et productivité.

---

# Ressources complémentaires

- [Attaque npm septembre 2025 – Trend Micro](https://www.trendmicro.com/en_us/research/25/i/npm-supply-chain-attack.html)  
- [Incident XZ Utils 2024 – Akamai](https://www.akamai.com/blog/security-research/critical-linux-backdoor-xz-utils-discovered-what-to-know)  
- [Symfony – MicroKernelTrait](https://symfony.com/doc/current/configuration/micro_kernel_trait.html)  
- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)  
- [Snyk – Sécurité des dépendances](https://snyk.io/)  
- [GitHub Dependabot](https://github.com/dependabot)
