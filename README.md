# JVthèque

JVthèque est une application web monolithique développée avec Next.js permettant de gérer sa collection de jeux vidéo. Elle propose une interface moderne pour organiser, consulter et enrichir votre ludothèque personnelle.

## Technologies utilisées

- **Next.js** (frontend & backend)
- **Node.js** (conteneurisé, image alpine)
- **PostgreSQL** (base de données)
- **Docker & Docker Compose** (orchestration et déploiement)

## Lancement du projet

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/Aeltiel/jvthequecode.git
   cd jvthequecode
   ```

2. **Lancer les conteneurs Docker**  
   ```bash
   docker-compose up --build
   ```

3. **Accéder à l'application**  
   - Frontend/Backend : [http://localhost:3000](http://localhost:3000)
   - Base de données PostgreSQL : port `5432`, user `jvtheque_user`, password `jvtheque_password`, base `jvtheque_db`

## Commandes utiles

- Démarrer : `docker-compose up`
- Arrêter : `docker-compose down`
- Rebuild : `docker-compose up --build`

## Structure des dossiers

```
jvthequecode/
├── jvtheque-app/      # Code source Next.js (monolithique)
├── docker-compose.yml
└── ...
```

> Pour toute configuration supplémentaire (variables d'environnement, scripts, etc.), se référer aux fichiers du dossier `jvtheque-app`.
