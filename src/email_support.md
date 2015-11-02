# Group Email Support
To Email Support you can use this RESTful endpoint. This endpoint only accepts POST requests, and provides no additional functionality.


## Email Support Collection [/email_support]
This endpoint accepts POST requests ONLY. There is no 'GET' support for email_support.

+ Model (application/json)

    JSON representation of Email Support Collection Resource.

    + Body

        {
            "detail": "Method \"GET\" not allowed.",
        }


### List all Email Support [GET]
+ Response 405 (application/json)

    [Email Support Collection][]

### Create a Support Email [POST]
Create a Support Email.  You must specify the following properties *(Future Feature)*:
- **subject**: The subject of the feedback email.
- **message**: The message of the feedback email.
- **user-interface**: The UI that the feedback email was sent from (Airport, Troposphere).

+ Request (application/json)

        {
            "subject": "This is the Subject of the Email",
            "message": "This is the full-body of the E-mail that will be sent.",
            "user-interface": "Troposphere"
        }

+ Response 201 (application/json)

        {}
  [Email Support][]
