# Flow

- Browser send raw data in bytes
- Kestrel create structure data
- Aspnet runtime create HttpRequest
- UseRouting middleware find the endpoint (route pattern and request delegate)
- UseEndpoint call the delegate:

```csharp
 delegate Task RequestDelegate(HttpContext context);
```