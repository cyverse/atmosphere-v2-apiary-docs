# Group Email Resource Request
To Email Resource Request you can use this RESTful endpoint. This endpoint only accepts POST requests, and provides no additional functionality.


## Email Resource Request Collection [/email_request_resources]
This endpoint accepts POST requests ONLY. There is no 'GET' request_resources for email_request_resources.

+ Model (application/json)

    JSON representation of Email Resource Request Collection Resource.

    + Body

        {
            "detail": "Method \"GET\" not allowed.",
        }


### List all Email Resource Request [GET]
+ Response 405 (application/json)

    [Email Resource Request Collection][]

### Create a Resource Request Email [POST]
Create a Resource Request Email.  You must specify the following properties *(Future Feature)*:
- **quota**: The quota requested in the request_resources email.
- **reason**: The reason for making the request_resources email.

+ Request (application/json)

        {
            "quota": "I would like 16 CPU and 64 GB RAM",
            "reason": "This is required by R to do gene sequencing.",
        }

+ Response 201 (application/json)

        {}
  [Email Resource Request][]
