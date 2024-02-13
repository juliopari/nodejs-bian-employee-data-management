# digital-ocean

## 1. Listar namespace
```
kubectl get ns
```

## 2. Eliminar un namesace
```
kubectl delete ns <namespace>
```

## 3. Crear namespace node
```
kubectl apply -f 00-namespace.yaml
```

## 4. Crear service de tipo node-port
```
kubectl -n nodejs-examples apply -f 01-nodejs-calculadora-service.yaml
```

## 5. Crear replication-controler
```
kubectl -n nodejs-examples apply -f 02-nodejs-calculadora-rc.yaml
```

## 6. Puerto es 30000, revisemos la IP pública: EXTERNAL-IP
```
NAME                   STATUS   ROLES    AGE   VERSION    INTERNAL-IP   EXTERNAL-IP     OS-IMAGE                       KERNEL-VERSION          CONTAINER-RUNTIME  
pool-y5vlxi20z-7mla0   Ready    <none>   18d   v1.22.12   10.110.0.3    167.99.45.107   Debian GNU/Linux 10 (buster)   5.10.0-0.bpo.15-amd64   containerd://1.4.13
```

## 7. Invocar a la API
```
POST
http://167.99.45.107:30000/api/v1/calculadora/sumar
{
    "numero1": 4,
    "numero2": 77
}
```
