# Follow-beers API

## Production

You can start it with the [Dockerfile](./Dockerfile)
provided

```bash
docker build -t follow-beers-api .
docker run -p 4000:4000 -d follow-beers-api:latest
```

An Open API specification is available here `./resources/swagger.yml`
