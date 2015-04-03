# Group Instance Tag -done-
An instance tag is a link between an image and a tag

## Instance Tag [/instance_tags/{id}]
A single Instance Tag object.

Each Instance Tag has the following properties:

- **id**: id for the instance tag
- **instance**: instance tagged
- **tag**: tag applied to the instance


+ Parameters
    + id (required, number) ... `id` of the Instance Tag.

+ Model(application/json)

    JSON representation of Provider Resource

    + Body

            {
                "id": 1,
                "instance":{
                    "id": 1
                },
                "tag":{
                    "id": 1
                }
            }


### Retrieve an Instance Tag [GET]
+ Response 200 (application/json)

    [Instance Tag][]

### Delete an Instance Tag [DELETE]
+ Response 200 (application/json)

## Instance Tag Collection [/instance_tags{?instance__id}]
Collection of all Instance Tags.

+ Model (application/json)

    JSON representation of Instance Tag Collection Resource.

    + Body

            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 1,
                    "instance":{
                        "id": 1
                    },
                    "tag":{
                        "id": 1
                    }
                }
            ]

### List all Instance Tags [GET]


+ Parameters
    + instance__id (number, optional) ... `id` of the Instance.

+ Response 200 (application/json)

    [Instance Tag Collection][]

### Create an Instance Tag [POST]

+ Request (application/json)

        {
            "instance": 1,
            "tag": 1
        }

+ Response 201 (application/json)

    [Instance Tag][]
