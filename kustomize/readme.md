### apply

base 디렉토리의 리소스 정의를 빌드하고, 그 결과를 kubectl을 사용하여 Kubernetes 클러스터에 적용하는 명령어입니다.

```shell
kustomize build base | kubectl apply -f -
```

### delete
base 디렉토리의 리소스 정의를 Kubernetes 클러스터에서 삭제하는 명령어

```shell
kustomize build base | kubectl delete -f -
```
