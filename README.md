# Application React + Express.js

## Démarrage

### Serveur

Démarrez le serveur Express :

```
cd server
npm install
npm run dev
```

Vous pouvez vérifier que le serveur répond en pointant votre navigateur vers http://localhost:4000/.

Modifiez le fichier [app.js](server/app.js).

### Client

Démarrez le serveur de développement React :

```
cd client
npm install
npm start
```

Pointez votre navigateur vers http://localhost:3000/.

Modifiez les fichiers du répertoire [src](client/src).

## Tests d'API

Les fichiers dans [server/**tests**](server/__tests__) sont des tests qui vérifient l'implémentation de votre API.
**Vous n'avez pas le droit de les modifier sans autorisation.**

Ils seront en erreur tant que vous n'aurez pas terminé d'implémenter correctement tous les appels de l'API.
Ce n'est pas grave.

À chaque fois que vous faites un `commit` sur GitHub, ces tests seront exécutés.
Le résultat des tests vous est notifié par email.
Ceci vous donne un feedback immédiat sur l'avancement de la partie serveur.
