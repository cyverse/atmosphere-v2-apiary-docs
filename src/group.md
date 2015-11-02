# Group Group
Every User is assigned to a Group of their own name initially. This 'usergroup' is then in charge of all the identities, providers, instances, and applications which can be shared among other, larger groups, but can still be tracked back to the original user who made the API request.

## Group [/group/{groupname}]
A single Group object.

Each Group has the following properties:

- **id**: id of the user
- **url**: url of the user
- **name**: name of the group
- **users**: list of users that are included in the group

+ Parameters
    + groupname (required, number, `nameOfGroup`) ... String `nameOfGroup` Retrieve details about a specific group.

+ Model (application/json)

    JSON representation of Group Resource.

    + Body

             {
                "id": 1,
                "url": "https://atmobeta.iplantc.org/api/v2/groups/21e5963b-d968-4dff-bcdc-054c75ce903c",
                "name": "example_group",
                "users": [
                    {
                        "id": 1,
                        "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                        "url": "https://atmobeta.iplantc.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                        "username": "example_user"
                    }
                ]
             }

### Retrieve a Single Group [GET]
+ Response 200 (application/json)

    [Group][]

## Groups Collection [/group]
Collection of all Groups

+ Model (application/json)

    JSON representation of Group Collection Resource

    + Body

            [
                {
                    "id": 1,
                    "url": "https://atmobeta.iplantc.org/api/v2/groups/21e5963b-d968-4dff-bcdc-054c75ce903c",
                    "name": "example_group",
                    "users": [
                        {
                            "id": 1,
                            "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                            "url": "https://atmobeta.iplantc.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                            "username": "example_user"
                        }
                    ]
                }
            ]

### List all Groups [GET]
+ Response 200 (application/json)
    [Groups Collection][]
