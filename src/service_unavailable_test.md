# Group Service Unavailable -UI testing only-
Endpoint to test UI response when Atmosphere goes under maintenance and returns a 503 status code.

##  Service Unavailable [/service_unavailable]

+ Model (application/json)

    + Body

          {
              "message": "Service unavailable"
          }

### Retrieve Unavailable Service [GET]
+ Response 503 (application/json)

  [Service Unavailable][]
