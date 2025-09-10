---
slug: pourquoi-il-ne-faut-pas-utiliser-la-session-dans-une-api
published: 2025-09-10
author: Arnaud POINTET
keywords: Symfony, API Symfony, Session PHP, Session Symfony, API REST, Stateless API, JWT Authentication, OAuth2, OpenID Connect, Sécurité API, Performance Symfony, Blocage Session, Verrou Session, Tutoriel Symfony, Bonnes Pratiques API, Développement Web, Scalabilité API, Token Based Authentication, API sécurisée, Guide Symfony
title: "Symfony : pourquoi il ne faut pas utiliser la session dans une API"
cover: img/content/pourquoi-il-ne-faut-pas-utiliser-la-session-dans-une-api/cover.png
sitemap:
  loc: /blog/pourquoi-il-ne-faut-pas-utiliser-la-session-dans-une-api
  lastmod: 2025-09-10
  changefreq: monthly
  priority: 0.8
---

Quand on développe une application Symfony “classique” avec Twig et des formulaires, la **session** est omniprésente : elle gère l’authentification, les flash messages, etc.  
Mais dès qu’on passe à une **API REST ou GraphQL**, continuer à utiliser la session PHP devient un piège.  

Dans cet article, on va voir pourquoi la session pose problème dans une API Symfony, et comment s’en passer.

<!--more-->

## Le problème du verrou de session

Symfony utilise le mécanisme standard de PHP : lorsqu’une requête démarre la session (`$request->getSession()` ou utilisation implicite de `Security`), PHP **verrouille le fichier de session**.  
Ce verrou n’est libéré qu’à la fin de la requête (ou après un `save()`/`session_write_close()`).

👉 Conséquence : si un client envoie plusieurs appels **en parallèle** vers ton API (ex. chargement d’un tableau de bord avec 5 widgets), les requêtes s’exécutent **les unes après les autres**.  

Cela provoque :
- des temps de réponse artificiellement longs,
- une mauvaise UX côté front (les requêtes se bloquent entre elles),
- un gaspillage de workers PHP-FPM.

### Exemple concret
```php
#[Route('/api/status', name: 'api_status')]
public function __invoke(Request $request): JsonResponse
{
    // Accès à la session = déclenche le verrou !
    $foo = $request->getSession()->get('foo');

    // …
    return new JsonResponse(['ok' => true]);
}
```

Avec plusieurs requêtes concurrentes → elles seront exécutées en **file indienne**.


## Une API doit être stateless

Une **API REST** (et par extension une API Symfony) doit être **sans état** (*stateless*).  
Chaque requête doit contenir toutes les infos nécessaires à son traitement (authentification, contexte métier).  

En utilisant la session :
- tu relies l’état du client au serveur → problème de **scalabilité** (sticky session),
- tu risques des **deadlocks** si la session est utilisée en lecture/écriture,
- tu ne respectes pas les principes REST.


## Symptômes que tu peux rencontrer

- Appels AJAX lents ou qui semblent “bloqués”.  
- Difficulté à reproduire en dev, mais **timeouts** aléatoires en prod.  
- Messages d’erreur Symfony comme :  
  > *“The session has been started after headers have already been sent.”*


## Les bonnes pratiques Symfony

### 🔒 Désactiver la session pour les firewalls API
Dans `config/packages/security.yaml` :
```yaml
security:
  firewalls:
    api:
      pattern: ^/api
      stateless: true   # <--- essentiel
      provider: app_user_provider
      # authenticator, etc.
```

Avec `stateless: true`, Symfony ne démarre pas la session pour ce firewall.


### 🔑 Utiliser des tokens plutôt que la session
- **JWT** avec [LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle).  
- **OAuth2/OpenID Connect** si tu utilises Keycloak, Auth0, etc.  
- Ou un **API Token** en base + `Authorization: Bearer <token>`.


### 🛑 Ne pas accéder à la session dans les contrôleurs d’API
Même en lecture seule, ça déclenche le verrou.  
Si tu dois vraiment lire une valeur (cas legacy), ferme immédiatement :
```php
$val = $request->getSession()->get('foo');
$request->getSession()->save(); // libère le verrou
```
⚠️ Mais le mieux reste de **ne jamais accéder** à la session.


## Résumé

- La session Symfony → pratique pour le web traditionnel, mais **inadaptée aux API**.  
- Causes : **verrouillage bloquant** + **rupture du stateless**.  
- Solution : déclarer le firewall `stateless: true` et baser ton auth sur des tokens (JWT, OAuth2).  
- Bonus : tu gagnes en **scalabilité** et en **performance**.


## Références

- [StackOverflow – Avoid locking session PHP in Symfony](https://stackoverflow.com/questions/53012940/avoid-locking-session-php-in-symfony)  
- [Symfony issue #24875 – Ajax request locked the session](https://github.com/symfony/symfony/issues/24875)  
- [PHP Session Locking explained (bram.us)](https://www.bram.us/2017/11/20/php-session-locking-how-to-prevent-blocking-requests/)  


**Conclusion**  
Si tu construis une API avec Symfony, retiens cette règle d’or :  
➡️ **Pas de session dans les API.**  
Utilise des tokens pour l’authentification et garde la session pour les applis web classiques où c’est encore pertinent.
