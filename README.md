# Follow Beers

## An interview dedicated App

<img src="./doc/screenshot.png" alt="Follow-Beers screenshot" />

### Presentation

**Follow Beers** is a functional app. It's composed by a Node.js API and a React front

- [API documentation _./api/README.md_](./api/README.md)
- [React front documentation _./front/README.md_](./front/README.md)


## Analyse statique du code
```
Bonne pratique d'architecture et de code.
Erreur d'architecture et de code.
```
### Cleaning
- Ajouter un linter.
- Chemin en absolu

### CSS / HTML
- onClick on a div ?

### React/Redux
- Pas habitué a compose et HOC
- Utiliser Immutable (https://immutable-js.github.io/immutable-js/) pour le store.

### Docker
- `react-script@3.3.0` est bug avec `docker-compose`, ajouter le field `stdin_open: true` dans le docker-compose file regle le soucis.


```
Axes d'ameliorations pour faire de cette application en production on produit robuste et maintenable
```
### Des tests
- Frontend: fonctionnels, integrations, unitaires: Cypress + Jest
- Backend: Unitaires, integrations, ...
- Autres: Postman

### CI/Build
- Build docker pour le frontend (npm build + serveur de fichier static (nginx))
- Integration au CI

## Feature
```
Evaluation des bieres partiellement implementé
A partir du endpoint `beers/{id}/rate` implementer a minima cette feature en se bassant sur le composant graphioque existant `front/src/components/BeerItem/Rate/Rate.jsx`
```
- A voir dans le fichier: `Rate.component.jsx`

### Bonus
- Dockerizer le frontend egalement et utilise docker-compose pour runner le projet rapidement et independament de la machine.
- Ajout du Update et Delete pour le endpoint `/beers`


## Optimisation
```
RenderCount pour compter le nombre de rendu
```
- Un exemple est disponible dans le fichier `BeerItem.component.jsx`
- `why-did-you-render` est un module npm a ajouter qui fait ca de maniere (très) optimisé: https://www.npmjs.com/package/@welldone-software/why-did-you-render



