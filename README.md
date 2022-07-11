## 実行手順

```bash
git clone https://github.com/choukonn/dotNetNext.git
```

```bash
dotnet run
```
> 必要かも
```bash
dotnet dev-certs https --trust
```

## NEXTフロントとDotNet Core通信

```mermaid
sequenceDiagram
    participant NEXT FRONT
    participant NEXT SERVER
    participant DotNet Core(Web API_Attribute Routing)
    NEXT FRONT->>NEXT SERVER: Axios.GET: '/api/weatherforcast'(API Routes)
    NEXT SERVER->>DotNet Core(Web API_Attribute Routing): Axios.GET: 'https://localhost:5129/api/wetherforcast'(Https Agent)
    DotNet Core(Web API_Attribute Routing)->>NEXT SERVER: JSON Response(async/await)
    NEXT SERVER->>NEXT FRONT: JSON Response(async/await)
    NEXT FRONT->>NEXT FRONT: File System Base: '/WeatherForcast'(Dynamic Routes)
```

> **Attention:**

- NEXT(HTTP) ----> DotNet Core(HTTPS)
    - サーバー内部通信(Axios: Https Agent)
    - ブラウザ外部通信(CORS: api server need to add trust origin url)
- DotNet Core(HTTPS) ----> NEXT(HTTP)
    - SPA Proxy(configure file: *.csproj)

> **Problem:**

- NEXTのHTTPS化問題
    - NEXT公式から「カスタマイズサーバー」非推奨（nginx/apacha reverse proxy??）
- NEXT/REACTログ問題
    - フリーモジュール少ない(browser: console.log server: stdout --> Pino構造化ログ)
    - 課金：[logflare](https://logflare.app/pricing)   |  [sentry-エラーハンドリング](https://sentry.io/pricing/)
- NEXT/REACTユニットテスト問題
