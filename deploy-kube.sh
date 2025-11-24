#!/bin/bash

# Nom du secret
SECRET_NAME=jvtheque-db-secret

# 0️⃣ Créer ou mettre à jour le secret DB à partir du fichier .env
echo "Création / mise à jour du secret Kubernetes..."
kubectl create secret generic $SECRET_NAME \
  --from-env-file=k8s/db-secret.env \
  --dry-run=client -o yaml | kubectl apply -f -

# 1️⃣ Appliquer les manifests K8s (déploiement, service, ingress)
echo "Déploiement des ressources Kubernetes..."
kubectl apply -f k8s/deployment.yaml \
              -f k8s/deployment-db.yaml \
              -f k8s/service.yaml \
              -f k8s/service-db.yaml \
              -f k8s/ingress.yaml \
              -f k8s/pvc-db.yaml

# 2️⃣ Attendre que le pod Next.js soit prêt
echo "Attente du pod Next.js..."
kubectl wait --for=condition=ready pod -l app=jvtheque --timeout=50s

# 3️⃣ Vérifier que le pod tourne
echo "Vérification des pods..."
kubectl get pods

# 4️⃣ Vérifier le service
echo "Vérification du service..."
kubectl get svc

# 5️⃣ Vérifier l'ingress
echo "Vérification de l'ingress..."
kubectl get ingress
kubectl describe ingress jvtheque-ingress

echo "----------------------------------------"
echo "Déploiement terminé !"
echo "Tu devrais pouvoir accéder à ton app via http://jvtheque.local si tout est correct."
echo "----------------------------------------"
