# Group Users

## User [/users/{id}]
A single User object.

Each Instance has the following properties:

- **id**: id
- **uuid**: unique id
- **name**: name of the instance
- **status**: the state the instance is in (active, suspended, shutoff, etc.)
- **size**: the size of the instance (number of CPUs, RAM, and Disk Space)
- **ip_address**: IP address you can use to connect to the machine.  Address that start with 196, 178, or 10 are private,
 all others are public.  Instances with an IP address of 0.0.0.0 have not been assigned an IP address yet.
- **shell**: true if a user can ssh into the instance
- **vnc**: true if a user can remote desktop into the instance
- **identity**: which account the instance deducts AU's from
- **user**: username for the person who created the instance
- **provider**: the provider the instance is on
- **image**: The specific version of an image the instance was created from
- **projects**: id of projects the instance is a part of
- **start_date**: date the instance was created
- **end_date**: end date of instance

+ Parameters
    + id (required, '1') ... integer id of the Instance.
    
+ Model (application/json)

    JSON representation of Instance Resource.

    + Body

        {
            "id": 1,
            "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
            "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
            "name": "Ubuntu 12.04.5 - iPlant Base",
            "status": "suspended",
            "size": {
                "id": 23,
                "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                "alias": "1",
                "name": "tiny1",
                "cpu": 1,
                "disk": 0,
                "mem": 4096,
                "active": true,
                "start_date": "2014-02-04T19:09:07.655411Z",
                "end_date": null
            },
            "ip_address": "0.0.0.0",
            "shell": true,
            "vnc": true,
            "identity": {
                "id": 6512,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "url": "https://atmobeta.iplantc.org/api/v2/identities/6512",
                "provider": 4
            },
            "user": {
                "id": 3178,
                "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                "username": "user",
                "first_name": "User",
                "last_name": "Name",
                "email": "user@iplantcollaborative.org",
                "is_staff": true,
                "is_superuser": true,
                "date_joined": "2015-02-11T22:37:24Z"
            },
            "provider": {
                "id": 4,
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                "name": "iPlant Cloud - Tucson",
                "description": "<No Description Provided>",
                "public": true,
                "active": true,
                "start_date": "2014-02-04T19:09:20.713175Z",
                "end_date": null
            },
            "image": {
                "id": 868,
                "url": "https://atmobeta.iplantc.org/api/v2/images/868",
                "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                "name": "functional genomics_v1.0",
                "description": "For practice bioinfomatics data tools",
                "icon": null,
                "start_date": "2014-09-05T18:08:12Z",
                "end_date": null
            },
            "projects": [
                3076
            ],
            "start_date": "2015-02-16T19:24:26Z",
            "end_date": null
        }

### Retrieve a User [GET]
Get a specific instance.

+ Response 200 (application/json)

    [User][]
    
### Terminate a User [DELETE]
Terminate an instance.

+ Response 200 (application/json)

    [User][]


## User Collection [/users]
Collection of all Users
    
+ Model (application/json)

    JSON representation of Instances Collection Resource.

    + Body

            {
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                   {
                      "id": 1,
                      "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                      "url": "https://atmobeta.iplantc.org/api/v2/instances/1",
                      "name": "Ubuntu 12.04.5 - iPlant Base",
                      "status": "suspended",
                      "size": {
                          "id": 23,
                          "url": "https://atmobeta.iplantc.org/api/v2/sizes/23",
                          "alias": "1",
                          "name": "tiny1",
                          "cpu": 1,
                          "disk": 0,
                          "mem": 4096,
                          "active": true,
                          "start_date": "2014-02-04T19:09:07.655411Z",
                          "end_date": null
                      },
                      "ip_address": "0.0.0.0",
                      "shell": true,
                      "vnc": true,
                      "identity": {
                          "id": 6512,
                          "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                          "url": "https://atmobeta.iplantc.org/api/v2/identities/6512",
                          "provider": 4
                      },
                      "user": {
                          "id": 3178,
                          "url": "https://atmobeta.iplantc.org/api/v2/users/3178",
                          "username": "user",
                          "first_name": "User",
                          "last_name": "Name",
                          "email": "user@iplantcollaborative.org",
                          "is_staff": true,
                          "is_superuser": true,
                          "date_joined": "2015-02-11T22:37:24Z"
                      },
                      "provider": {
                          "id": 4,
                          "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                          "url": "https://atmobeta.iplantc.org/api/v2/providers/4",
                          "name": "iPlant Cloud - Tucson",
                          "description": "<No Description Provided>",
                          "public": true,
                          "active": true,
                          "start_date": "2014-02-04T19:09:20.713175Z",
                          "end_date": null
                      },
                      "image": {
                          "id": 868,
                          "url": "https://atmobeta.iplantc.org/api/v2/images/868",
                          "uuid": "923222d2-a508-4b2c-b19e-00a29f1a5bb5",
                          "name": "functional genomics_v1.0",
                          "description": "For practice bioinfomatics data tools",
                          "icon": null,
                          "start_date": "2014-09-05T18:08:12Z",
                          "end_date": null
                      },
                      "projects": [
                          3076
                      ],
                      "start_date": "2015-02-16T19:24:26Z",
                      "end_date": null
                   }
                ]
            }
    
### List all Users [GET]
Get a list of your instances created under the specific provider/identity.

+ Response 200 (application/json)

    [User Collection][]
        
### Create a User [POST]
Launch an instance of an image.  You must specify the following properties:

- **name**: the name of your instance
- **image_version_id**: the id of the image version version you want to launch
- **size_id**: the id of the size of the virtual machine you need
- **provider_id**: id of the provider that you want the instance launched on
- **identity_id**: id of the identity you want to use to launch the instance

+ Request (application/json)

        { 
            "name": "Instance Name",
            "image_version_id": "237f983e-f80d-11e3-8ef5-b2227cce2b54"
            "size_id": 1,
            "provider_id": 1
            "identity_id": 1
        }

+ Response 201 (application/json)

    [User][]
