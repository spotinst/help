# Spot API Administration

The Spot API reference is available as an OpenAPI Specification.

OpenAPI Specification is an industry standard that allows APIs to be defined for humans as well as machines. This allows any person or application to easily consume and build with Spot in a structured format that includes detailed descriptions and examples of every endpoint. The specification is hosted on GitHub, and full documentation is available on the Spot [API Reference](https://docs.spot.io/api/) site.

## Rate Limit

There's a limit to how many API requests you can make every 60 seconds. This limit is per a combination of the:

* Spot organization
* API route (such as `/aws/ec2/group`)
* Request type (such as DEL, GET, POST, PUT)

Additional requests are blocked (HTTP status 429 too many requests).

> **Note**:
>
> If you continue to send the same request type for the specific API route (in the same organization) after being blocked, the timer will not reset until 60 seconds after the API requests. Sending multiple requests too soon will delay the reset.
>
> If you're using an automated client, have your retry set to exponential backoff (the wait time between retries increases exponentially).

For example, let's say your limit is 3 GET requests per API route per 60 seconds. So if you send a GET request for a specific API route, such as `/aws/ec2/group`:

* Request #1 at 00:00:05 passes because it's the first request in the last 60 seconds
* Request #2 at 00:00:10 passes because it's the second request in the last 60 seconds
* Request #3 at 00:00:15 passes because it's the third request in the last 60 seconds
* Request #4 at 00:00:20 is blocked because it's the fourth request in the last 60 seconds
* Request #5 at 00:01:07 passes because more than 60 seconds have passed since the first request

In the response, you can see these types of response headers:

* **X-RateLimit-Remaining** is how many more requests you can make before reaching the limit for the last 60 seconds
* **X-RateLimit-Limit** is the number of requests per 60 seconds for the API route and the specific request type
* **X-RateLimit-Reset** is how many seconds left until an API request will be allowed--this is always included, even when you're below the limit, so you know when the first request in the last 60 seconds expires

<details>
  <summary markdown="span">Sample response when the limit is exceeded</summary>

   ```json
   
   {
      "request": {
          "id": "546eeaef-783c-4dc2-8b16-ceb01ee3f968",
          "url": "/aws/ec2/group/sig-1234567?accountId=act-1234567",
          "method": "GET",
          "timestamp": "2025-06-30T11:45:44.765Z"
      },
      "response": {
          "status": {
              "code": 429,
              "message": "Too Many Requests"
          },
          "data": "Rate limit exceeded"
      }
   }
   ```

</details>

Keep in mind:

* Monitor the rate limit headers to make sure you're not getting close to your limit
* Don't retry until the time in the `X-RateLimit-Reset` has passed if you get a 429 response
* Avoid rapid retries, this will delay the timer reset
* Set your retry to exponential backoff (the wait time between retries increases exponentially)

If you're consistently reaching the request limit and have updated your request logic according to the instructions, you can contact [support in the Spot console online chat or by email](https://spot.io/support/). Make sure to include:

* Your organization ID
* API route (such as `/aws/ec2/group`)
* Request type (such as DEL, GET, POST, PUT)
* A short explanation of your use case

Customer support will review your request and contact you.
