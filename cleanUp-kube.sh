#!/bin/bash

# Script pour nettoyer le déploiement K8s local

echo "Suppression des ressources Kubernetes..."
kubectl delete -f k8s/

echo "Nettoyage terminé."
