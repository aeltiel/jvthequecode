#!/bin/bash

# Script pour déployer l'app Next.js sur Kubernetes local

# 1️⃣ Appliquer les manifests K8s (déploiement, service, ingress)
echo "Déploiement des ressources Kubernetes..."
kubectl apply -f k8s/

# 2️⃣ Vérifier que le pod tourne
echo "Vérification des pods..."
kubectl get pods

# 3️⃣ Vérifier le service
echo "Vérification du service..."
kubectl get svc

# 4️⃣ Vérifier l'ingress
echo "Vérification de l'ingress..."
kubectl get ingress
kubectl describe ingress jvtheque-ingress

echo "----------------------------------------"
echo "Déploiement terminé !"
echo "Tu devrais pouvoir accéder à ton app via http://jvtheque.local si tout est correct."
echo "----------------------------------------"
