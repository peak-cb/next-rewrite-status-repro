# proxy rewrite status is replaced by 200 with `cacheComponents`

```
npm install
npm run build && npm start
curl -o /dev/null -w '%{http_code}\n' http://localhost:3000/listing/123   # 200, expected 410
curl -o /dev/null -w '%{http_code}\n' http://localhost:3000/maintenance   # 200, expected 503
```

Comment out `cacheComponents: true` in `next.config.ts`, rebuild, and both return 410 / 503.
