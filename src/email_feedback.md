# Group Email Feedback
To Email Feedback you can use this RESTful endpoint. This endpoint only accepts POST requests, and provides no additional functionality.


## Email Feedback Collection [/email_feedback]
This endpoint accepts POST requests ONLY. There is no 'GET' feedback for email_feedback.

+ Model (application/json)

    JSON representation of Email Feedback Collection Resource.

    + Body

        {
            "detail": "Method \"GET\" not allowed.",
        }


### List all Email Feedback [GET]
+ Response 405 (application/json)

    [Email Feedback Collection][]

### Create a Feedback Email [POST]
Create a Feedback Email.  You must specify the following properties *(Future Feature)*:
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
  [Email Feedback][]
