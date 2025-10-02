# JVthèque

JVthèque est une application web monolithique développée avec Next.js permettant de gérer sa collection de jeux vidéo. Elle propose une interface moderne pour organiser, consulter et enrichir votre ludothèque personnelle.

## Technologies utilisées

- **Next.js** (frontend & backend)
- **Node.js** (conteneurisé, image alpine)
- **PostgreSQL** (base de données)
- **Docker & Docker Compose** (orchestration et déploiement)
- **Kubernetes** (déploiement local possible)
- **GitHub Actions** (CI/CD)

## Lancement du projet

### 1. Cloner le dépôt
```bash
git clone https://github.com/Aeltiel/jvthequecode.git
cd jvthequecode
```

### 2. Lancer en développement (hot reload)
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### 3. Lancer en production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### 4. Accéder à l'application
- Frontend/Backend : [http://localhost:3000](http://localhost:3000)
- Base de données PostgreSQL : port `5432`, user `jvtheque_user`, password `jvtheque_password`, base `jvtheque_db`

## Déploiement Kubernetes

- Appliquer les manifests :
  ```bash
  ./deploy-kube.sh
  ```
- Nettoyer le déploiement :
  ```bash
  ./cleanUp-kube.sh
  ```
- Les fichiers de configuration sont dans le dossier [`k8s/`](k8s/deployment.yaml).

## CI/CD

- Deux workflows sont configurés dans [`.github/workflows/`](.github/workflows/dev.yml) :
  - **dev.yml** : CI sur la branche Dev (Docker Compose dev)
  - **main.yml** : CI sur les pull requests vers main (Docker Compose prod + build/push image Docker)

## Commandes utiles

- Démarrer (dev) : `docker-compose -f docker-compose.dev.yml up`
- Démarrer (prod) : `docker-compose -f docker-compose.prod.yml up`
- Arrêter : `docker-compose down`
- Rebuild : `docker-compose up --build`

## Structure des dossiers

```
jvthequecode/
├── jvtheque-app/           # Code source Next.js (monolithique)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx
│   │   │   ├── component/
│   │   │   │   └── navbar.jsx
│   │   │   ├── collection/
│   │   │   │   └── page.jsx
│   │   │   ├── profil/
│   │   │   │   └── page.jsx
│   │   │   └── globals.css
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── next.config.mjs
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   └── .gitignore
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── .github/
│   └── workflows/
│       ├── dev.yml
│       └── main.yml
├── deploy-kube.sh
├── cleanUp-kube.sh
└── README.md
```

> Pour toute configuration supplémentaire (variables d'environnement, scripts, etc.), se référer aux fichiers du dossier [`jvtheque-app`](jvtheque-app/package.json).

---