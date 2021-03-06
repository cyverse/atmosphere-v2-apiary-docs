# Group Profile -deprecated-
The Profile contains information about the authenticated user. Profile can be thought of as the 'entry-point' to the
 Atmosphere APIs. Once authenticated, a user can find their default provider and identity. The IDs for provider and
 Identity can be used to navigate the rest of the API.

## Profile [/profile]
A single Profile object.

Each Profile has the following properties:

- **id**: the id for the user this profile belongs to
- **username**: the username of the user this profile belongs to
- **email**: the users email address
- **is_staff**: true if the user is iPlant staff
- **is_superuser**: true if the user is a super user (comes with special privileges)
- **send_emails**: true if the user wants to be notified via email when instances they've launched are ready
- **icon_set**: the style of icons the user would like to see in the Atmosphere UI when no there is no custom icon to
 display


+ Model (application/json)

    JSON representation of Profile Resource.

    + Body

            {
                "id": 1,
                "username": "username",
                "email": "username@example.com",
                "is_staff": false,
                "is_superuser": false,
                "send_emails": true,
                "icon_set": "default",
            }
            
### Retrieve the Profile [GET]
+ Response 200 (application/json)

    [Profile][]
    
### Update the Profile [PATCH]
To update the profile, send a PATCH request that includes the fields you want to modify.  Currently the only modifiable
 fields are **send_emails** and **icon_set**

+ Request (application/json)

        {
            "send_emails": true,
            "icon_set": "robots"
        }

+ Response 200 (application/json)

    [Profile][]
