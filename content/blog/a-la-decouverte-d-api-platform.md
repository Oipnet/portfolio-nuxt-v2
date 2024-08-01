---
published: 2024-08-01
author: Arnaud POINTET
title: A la découverte d'Api-Platform
cover: img/content/a-la-decouverte-d-api-platform/logo-apip.png
---
Découvrir API Platform, c'est plonger dans un monde où la création d'API devient un jeu d'enfant. En quelques minutes, vous pouvez générer un CRUD complet pour vos entités Symfony, accompagné d'une documentation OpenAPI prête à l'emploi.

<!--more-->

Mais au-delà de cette simplicité apparente, API Platform est un outil puissant qui vous permet de personnaliser chaque aspect de votre API pour répondre à des besoins complexes. Dans cet article, nous allons explorer comment démarrer avec API Platform et créer notre première API, en posant les bases pour une compréhension approfondie de ce framework incontournable.

## Les premiers pas avec API-PLATFORM

Lorsque l'on découvre [API Platform](https://api-platform.com) (API-P), la simplicité de l'outil est immédiatement frappante. En quelques minutes à peine, il est possible de générer un CRUD (Create, Read, Update, Delete) complet pour nos entités Symfony. La magie opère, et nous nous retrouvons avec une documentation au format OpenAPI. Nous avons l'impression d’être les rois du REST.

Cependant, bien que le CRUD réponde à une grande partie de nos besoins lors du développement d'API, il arrive que nous ayons des cas où l'introduction de logique métier soit nécessaire. Ces situations exigent une approche plus personnalisée et complexe que le simple CRUD ne peut offrir.

Dans ce premier article, je vous propose de découvrir comment créer simplement notre première API avec API-P. Une première approche simple afin d’avoir les bases.

La première question à régler est : qu’est-ce qu’API Platform ?

C’est une librairie PHP permettant la création d’API Hypermedia. Mais pas seulement : c’est également un ensemble d’outils JavaScript pour créer une application frontend basée sur les frameworks les plus populaires, un générateur d’interface d’administration basé sur la documentation OpenAPI, ainsi que des définitions Docker et Kubernetes prêtes pour le déploiement en production.

## Démarrage d’un projet avec API-PLATFORM

Il existe plusieurs possibilités que nous allons voir pour utiliser Api-platform.

### Utiliser la distribution d’API-PLATFORM (recommandé)

La distribution d'API Platform est disponible sur GitHub à l'adresse suivante : [API Platform GitHub Releases](https://github.com/api-platform/api-platform/releases/latest). Il suffit de la télécharger, de décompresser l'archive, puis de se rendre dans le dossier pour lancer les containers Docker avec les commandes suivantes :

```shell
docker compose build --no-cache
docker compose up --wait
```

Une fois ces commandes exécutées, nous aurons trois services lancés :

*   **php** : Ce service délivre l’API en utilisant FrankenPHP, un serveur d’application construit sur Caddy. Il offre également un support natif de Mercure, ce qui permet de gérer des communications en temps réel avec nos applications PHP grâce aux événements poussés sur un serveur SSE (Server-Sent Events).
    
*   **pwa** : Ce service correspond à un projet Next.js qui permet de créer un client front-end pour consommer notre API. Il inclut également une interface d’administration générée à partir de la documentation OpenAPI.
    
*   **database** : Une base de données PostgreSQL.
    

### Utilisation du Symfony CLI

API Platform est un composant officiel de Symfony et peut être installé via Symfony Flex. Cependant, cette méthode ne permet pas de profiter immédiatement de toutes les fonctionnalités offertes par l’outil.

Vous pouvez installer API Platform dans un projet Symfony existant ou créer un nouveau projet Symfony pour commencer avec API Platform.

*   **Pour ajouter API Platform à un projet Symfony existant** :
    

Rendez-vous dans le dossier de votre projet Symfony et utilisez Composer pour installer le composant API Platform :

```shell
cd /chemin/vers/votre/projet
symfony composer require api
```

*   **Pour créer un nouveau projet Symfony et ajouter API Platform** :
    

Si vous préférez partir d'une base propre, vous pouvez créer un nouveau projet Symfony et y ajouter API Platform :

```shell
symfony new demo-api
cd demo-api
symfony composer require api
```

Il ne reste plusqu’a lancer le serveur symfony via la CLI

```shell
symfony serve
```

## Prêt pour créer nos routes API

Parfait ! Maintenant que votre API est prète, il est temps de définir vos routes pour exposer les différentes fonctionnalités de votre API

### Notre première ressource API

La force d’API Platform réside dans sa capacité à exposer rapidement vos entités Symfony au travers d’une API RESTful. Pour ce faire, il vous suffit d’ajouter l’attribut ApiPlatform\\Metadata\\ApiResource à vos entités. API Platform se charge automatiquement du mapping, de la documentation, et de la réponse au format JSON-LD.

Voici un exemple d'entité Symfony configurée pour API Platform :

```php
namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource]
#[ORM\Entity]
class Greeting
{
    /**
    * The entity ID
    */
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'SEQUENCE')]
    private ?int $id = null;
    
    /**
    * A nice person
    */
    #[ORM\Column]
    #[Assert\NotBlank]
    public string $name = '';
    
    public function getId(): ?int
    {
        return $this->id;
    }
}
```

Avec cette configuration, API Platform génére automatiquement les routes CRUD pour votre entité Greeting. Voici les routes disponibles :

<table style="minWidth: 75px"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Endpoint</p></th><th colspan="1" rowspan="1"><p>Méthode</p></th><th colspan="1" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>/api/greetings</strong></p></td><td colspan="1" rowspan="1"><p>GET</p></td><td colspan="1" rowspan="1"><p>Liste des Greetings</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>/api/greetings</strong></p></td><td colspan="1" rowspan="1"><p>POST</p></td><td colspan="1" rowspan="1"><p>Création d’un Greeting</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>/api/greetings/{id}</strong></p></td><td colspan="1" rowspan="1"><p>GET</p></td><td colspan="1" rowspan="1"><p>Consultation d’un Greeting</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>/api/greetings/{id}</strong></p></td><td colspan="1" rowspan="1"><p>PUT</p></td><td colspan="1" rowspan="1"><p>Mise à jour d’un Greeting</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>/api/greetings/{id}</strong></p></td><td colspan="1" rowspan="1"><p>DELETE</p></td><td colspan="1" rowspan="1"><p>Suppression d’un Greeting</p></td></tr></tbody></table>

Ces routes permettent d'effectuer toutes les opérations CRUD sur l'entité Greeting, offrant ainsi une API complète et préte à l'emploi.

## Conclusion

Nous en avons terminé avec cette première exploration d'API Platform. Nous avons vu comment, en un rien de temps, nous pouvons exposer nos entités Symfony via une API RESTful grâce à la simplicité d'API Platform. Cette approche de base nous permet de dÃ©marrer rapidement, mais l'outil propose bien plus que cela.

Dans nos prochains articles, nous explorerons comment API Platform gère la récupération des données et comment nous pouvons optimiser et personnaliser ce processus. Voici quelques-uns des aspects que nous allons aborder :

*   **Récupération des données** : Nous découvrirons comment API Platform gère la récupération des données via le système de Provider.
    
*   **Ne pas exposer directement nos entités** : Nous apprendrons à créer des ressources API plus sécurisées en évitant l'exposition directe des entités Doctrine. Nous explorerons l'utilisation de Data Transfer Objects (DTO) pour contrôler ce qui est exposé à travers l'API.
    
*   **Mise en place d’une politique de sécurité** : Nous aborderons la configuration des mécanismes de sécurité pour protéger vos API et gérer les permissions des utilisateurs, garantissant ainsi que seules les personnes autorisées peuvent accéder ou modifier les données.
    
*   **Et plus encore** : Nous nous pencherons également sur des fonctionnalités avancées telles que la pagination, les filtres personnalisés, et l'intégration avec des outils externes, afin de vous aider à tirer le meilleur parti d'API Platform.
    

Restez connectés pour approfondir ces sujets et découvrir comment API Platform peut transformer la gestion et l'exposition de vos données de manière efficace et flexible.