#!/bin/bash

echo "----------------------------------------"
echo "Suppression des ressources Kubernetes..."
kubectl delete deployment,service,ingress -l app=jvtheque

echo "Suppression du secret de la DB si présent..."
SECRET_NAME=jvtheque-db-secret
if kubectl get secret $SECRET_NAME &> /dev/null; then
  kubectl delete secret $SECRET_NAME
  echo "Secret $SECRET_NAME supprimé."
else
  echo "Le secret $SECRET_NAME n'existe pas."
fi

echo "----------------------------------------"
echo "Nettoyage terminé."

