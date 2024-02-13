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

## 4. Ejecutar deployment
```
kubectl -n nodejs-examples apply -f 01-nodejs-calculadora-deployment-loadbalancer.yaml
```

## 5. Conocer la IP Pública: EXTERNAL-IP
```
kubectl -n nodejs-examples get services
```

```
NAME                 TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
nodejs-calculadora   LoadBalancer   10.245.148.57   64.225.81.0   80:30695/TCP   3m27s  
```

## 7. Invocar a la API
```
POST
http://64.225.81.0/api/v1/calculadora/sumar
{
    "numero1": 4,
    "numero2": 77
}
```
