# Follow Beers

## An interview dedicated App

<img src="./doc/screenshot.png" alt="Follow-Beers screenshot" />

### Analyse statique de code

#### Bonnes pratiques d'architecture et de code mise en place :

- Utilisation du couple container/component qui permet de séparer la logique (fetch...) du rendu des composants.
- Découpage des composants selon l'atomic design

#### Erreurs d'architecture et de code existantes dans l'application :

- Ambiguité dans la pratique d'import/export : certains composants font des export default (BeerForm = pages/form/Form.component.jsx, Rate = Rate.component.jsx),
  d'autres font des export const (BeerList = BeerList.component.jsx, Button, Header)

#### Axes d'améliorations :

- Prévoir des tests unitaires (notament au niveau des reducers)
- Utiliser les PropTypes afin de valider les types des props passées aux composants
- Utiliser ESLint qui peut donner des suggestions d'amélioration et détecter les erreurs de code
- Commenter le code

### Presentation

**Follow Beers** is a functional app. It's composed by a Node.js API and a React front

- [API documentation _./api/README.md_](./api/README.md)
- [React front documentation _./front/README.md_](./front/README.md)
