# nodejs-bian-employee-data-management

## 1. Instalar dependencias
```
npm install
```

## 2. Ejecutar
```
npm run dev
```

## 2. Testing localhost
```
http://localhost:3000/employee-data-management/v1.0/personal-information/retrieve
```
```
{
    "numero1": 1,
    "numero2": 2
}
```
```
{
    "resultado": 3
}
```
## 3. Docker build
```
docker build -t nodejs-bian-employee-data-management:v1 .
```

## 4. Docker run
```
docker run --name con-nodejs-bian-employee-data-management -p 4000:3000 nodejs-bian-employee-data-management:v1
```

## 5. Enviar a Dockerhub
```
docker login –-u juliopari –-p *****
docker tag nodejs-bian-employee-data-management:v1 juliopari/nodejs-bian-employee-data-management:v1
docker push juliopari/nodejs-bian-employee-data-management:v1
```

## 5. Desplegar en Digital Ocean
```
Ingresar a: /kubernetes/README.md
```
