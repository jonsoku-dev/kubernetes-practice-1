for app in react express nginx; do
  mkdir -p base/$app
  touch base/$app/{${app}-deployment.yaml,${app}-service.yaml,kustomization.yaml}
done
touch base/kustomization.yaml
