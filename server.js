import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Bundler from 'parcel-bundler';

import { cardRouter, deckRouter, playerRouter } from './Routes';

const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
mongoose
  .connect(
    'mongodb://localhost/jcc',
    // 'mongodb+srv://admin:pass1234@cluster0-3q8op.mongodb.net/jcc?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .catch(e => {
    console.error('Cannot connect to database', e);
  });
// const db = mongoose.connect('mongodb+srv://admin:pass1234@cluster0-3q8op.mongodb.net/jcc?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(err) {
//     if (err){ return console.error(err)}
//   }
// );

// setting CORS
app.use(cors());

// setting body parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// API routes
app.use('/api/cards', cardRouter);
app.use('/api/decks', deckRouter);
app.use('/api/players', playerRouter);

const file = './front/index.html';
const options = {
  outDir: './dist', // Le répertoire out pour mettre les fichiers construits, par défaut dist
  outFile: 'index.html', // Le nom du fichier en sortie
  publicUrl: './', // L'URL du serveur, par défaut '/'
  watch: true, // Surveille les fichiers et les reconstruit lors d'un changement, par défaut pour process.env.NODE_ENV !== 'production'
  cache: true, // Active ou non la mise en cache, la valeur par défaut est true
  cacheDir: '.cache', // Le répertoire où le cache est placé, par défaut .cache
  contentHash: false, // Désactive l'inclusion du hachage de contenu sur le nom du fichier
  global: 'moduleName', // Expose sous ce nom des modules comme UMD, désactivé par défaut
  minify: false, // Minifie les fichiers, activé par défaut si process.env.NODE_ENV === 'production'
  scopeHoist: false, // Active le flag expérimental de scope hoisting/tree shaking, pour des paquets plus petits en production
  target: 'browser', // La cible de compilation : browser/node/electron, par défaut browser
  bundleNodeModules: false, // Les dépendances du package.json ne sont pas incluses lors de l'utilisation de l'option 'node' ou 'electron' avec l'option 'target' ci-dessus. Définissez le à true pour pouvoir les ajouter au paquet, false par défaut
  logLevel: 3, // 5 = Tout consigner dans un fichier, 4 = Comme le 3, mais avec des horodatages et également enregistrer les requêtes http sur le serveur de développement, 3 = Consigner les informations, avertissements et erreurs, 2 = Consigner les avertissements et erreurs, 1 = Consigner les erreurs
  hmr: true, // Active ou désactive le HMR lors de la surveillance (watch)
  hmrPort: 0, // Le port sur lequel la socket HMR (Hot Module Reload) fonctionne, par défaut à un port libre aléatoire (0 dans node.js se traduit en un port libre aléatoire)
  sourceMaps: true, // Active ou désactive les sourcemaps, par défaut activé (les constructions minifiées pour l'instant créent toujours des sourcemaps)
  hmrHostname: '', // Un nom d'hôte pour le rechargement de module à chaud, par défaut à ''
  detailedReport: false, // Afficher un rapport détaillé des paquets, ressources, tailles des fichiers et durées de build, par défaut à false, les rapports ne sont affichés que si le mode watch est désactivé
  autoInstall: true, // Active ou désactive l'installation auto des dépendances manquantes lors de l'empaquetage
};

// Initialise un nouveau bundler en utilisant un fichier et des options
const bundler = new Bundler(file, options);
app.use(bundler.middleware());

// Running the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
