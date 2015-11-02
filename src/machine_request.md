# Group Machine Requests
Machine Requests are used to create new images on the cloud. Machine requests can be private, public, or shared. The creator of an image is responsible for keeping their image up to date. Image creators can optionally add users, boot scripts, and licenses to an image *before* it is created. After it has been created the other APIs can be used to make these changes to the specific application or version.

## Machine Request [/machine_requests/{id}]
A single Machine Request object.

Each Machine Request has the following properties:

- **id**: the id of the machine_request *(DEPRECATED)*
- **uuid**: the uuid of the machine_request
- **url**: the URL of the machine_request
- **name**: the name of the Application (The same for all versions)
- **instance**: the instance that the machine_request is based on
- **identity**: the identity that requested the machine_request
- **status**: The status object representing the state of the machine_request
- **old_status**: The status object representing the state of the machine_request *(DEPRECATED)*
- **parent_machine**: The 'direct ancestor' of the instance that the machine_request is based on.
- **admin_message**: *Not used at this time.*
- **new_application_name**: The new name given to the application at request-time.
- **new_application_description**: The new description given to the application at request-time.
- **new_application_visibility**: The application-level visibility given to the application at request-time.
- **access_list**: A list of usernames that will be allowed access to the new machine (If private or 'select').
- **iplant_sys_files**: A list of system files that have been modified. This list will not be changed during the imaging process (when possible).
- **installed_software**: For internal tracking only, this is a list of installed software, as given by the user at request-time.
- **exclude_files**: A list of files that should be excluded/ignored during the 'cleaning' step in the imaging process (when possible)
- **new_version_name**: The version name for this specific machine request.
- **new_version_change_log**: The version change-log for this specific machine request.
- **new_version_tags**: A list of tags to be applied to the version.
- **new_version_memory_min**: The minimum threshold of RAM (in GB) required to launch this new machine.
- **new_version_cpu_min**: The minimum threshold of CPU required to launch this new machine.
- **new_version_allow_imaging**: Determine whether other users can 'fork' your application to make a copy for themselves.
- **new_version_forked**: If true, 'fork' your version to create a brand new application, that you are the owner of. If false, 'update' the existing application and add this new version to the list.
- **new_version_licenses**: A list of licenses to be applied to the version.
- **new_version_scripts**: A list of scripts to be applied to the version.
- **new_version_memberships**: A list of members/groups to be given access to this version.
- **new_machine_provider**: The Cloud Provider that you would like the new image to be created on. If different from the provider the instance was launched on, a migration will be required (This can take more time).
- **new_machine_owner**: The owner of the machine request as well as the machine when it has been imaged.
- **new_machine**: The object that contains the new provider_machine that was created as a result of this machine_request.
- **new_application_version**: The object that contains the new application_version that was created as a result of this machine_request.
- **start_date**: the date the machine_request was requested
- **end_date**: the date the machine_request was completed



+ Parameters
    + uuid (number, required) ... uuid of the Machine Request.
    
+ Model (application/json)

    JSON representation of Machine Request Resource.

    + Body
    
        {
            "id": 1,
            "uuid": "5b8db071-27eb-477a-bd3a-8fef850ff581",
            "url": "https://atmobeta.iplantc.org/api/v2/machine_requests/5b8db071-27eb-477a-bd3a-8fef850ff581",
            "instance": {
                "id": 20397,
                "uuid": "554c5a89-6905-4d77-a752-1aec64b98480",
                "url": "https://atmobeta.iplantc.org/api/v2/instances/554c5a89-6905-4d77-a752-1aec64b98480",
                "name": "Development",
                "status": "active",
                "size": {
                    "id": 23,
                    "uuid": "39169ae0-bb4f-454f-bd5c-251d7b1ca319",
                    "url": "https://atmobeta.iplantc.org/api/v2/sizes/39169ae0-bb4f-454f-bd5c-251d7b1ca319",
                    "alias": "1",
                    "name": "tiny1",
                    "cpu": 1,
                    "disk": 0,
                    "mem": 4096,
                    "active": true,
                    "start_date": "2014-02-04T19:09:07.655411Z",
                    "end_date": null
                },
                "ip_address": "128.196.64.167",
                "shell": true,
                "vnc": true,
                "identity": {
                    "id": "2360",
                    "uuid": "b33e5137-2337-45ae-9b80-523b87bc2873",
                    "url": "https://atmobeta.iplantc.org/api/v2/identities/b33e5137-2337-45ae-9b80-523b87bc2873",
                    "provider": 4
                },
                "user": 1,
                "provider": 4,
                "image": {
                    "id": 1155,
                    "url": "https://atmobeta.iplantc.org/api/v2/images/92818a5f-38f9-4c0f-adad-c987359ff0ae",
                    "uuid": "92818a5f-38f9-4c0f-adad-c987359ff0ae",
                    "name": "IDAC Server",
                    "description": "Updating description of the original application",
                    "icon": null,
                    "start_date": "2015-08-22T01:04:25Z",
                    "end_date": null,
                    "user": 1
                },
                "start_date": "2015-09-15T03:29:33Z",
                "end_date": null
            },
            "identity": {
                "id": "2360",
                "uuid": "b33e5137-2337-45ae-9b80-523b87bc2873",
                "url": "https://atmobeta.iplantc.org/api/v2/identities/b33e5137-2337-45ae-9b80-523b87bc2873",
                "provider": 4
            },
            "status": {
                "id": 2,
                "url": "https://atmobeta.iplantc.org/api/v2/status_types/50643816-5aa7-4334-a7cd-e857bb902265",
                "uuid": "50643816-5aa7-4334-a7cd-e857bb902265",
                "name": "closed",
                "description": "",
                "start_date": "2015-01-26T07:00:00Z",
                "end_date": null
            },
            "old_status": "completed",
            "parent_machine": {
                "id": 1981,
                "uuid": "4a67757e-4818-485f-9c1d-d1db0b0e4148",
                "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/4a67757e-4818-485f-9c1d-d1db0b0e4148",
                "provider": {
                    "id": 4,
                    "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                    "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                    "name": "iPlant Cloud - Tucson",
                    "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                    "public": true,
                    "active": true,
                    "start_date": "2014-02-04T19:09:20.713175Z",
                    "end_date": null
                },
                "version": "2.0",
                "owner": "example_user",
                "start_date": "2015-09-14T04:56:57Z",
                "end_date": null
            },
            "admin_message": "",
            "new_application_name": "IDAC Server",
            "new_application_description": "Updating description of the original application",
            "new_application_visibility": "select",
            "access_list": "[u'example_user']",
            "iplant_sys_files": "[no files specified]",
            "installed_software": "[no software specified]",
            "exclude_files": "",
            "new_version_name": "3.0-test",
            "new_version_change_log": "test completed",
            "new_version_tags": "[u'test']",
            "new_version_memory_min": "0",
            "new_version_cpu_min": "0",
            "new_version_allow_imaging": true,
            "new_version_forked": false,
            "new_version_licenses": [],
            "new_version_scripts": [],
            "new_version_membership": [],
            "new_machine_provider": {
                "id": 4,
                "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                "name": "iPlant Cloud - Tucson",
                "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                "public": true,
                "active": true,
                "start_date": "2014-02-04T19:09:20.713175Z",
                "end_date": null
            },
            "new_machine_owner": {
                "id": 1,
                "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                "url": "https://atmobeta.iplantc.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                "username": "example_user"
            },
            "start_date": "2015-10-06T17:11:06.494038Z",
            "end_date": "2015-10-06T17:26:21.644705Z",
            "new_machine": {
                "id": 2073,
                "uuid": "88753132-e71b-4867-a15b-fe825804854f",
                "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/88753132-e71b-4867-a15b-fe825804854f",
                "provider": {
                    "id": 4,
                    "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                    "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                    "name": "iPlant Cloud - Tucson",
                    "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                    "public": true,
                    "active": true,
                    "start_date": "2014-02-04T19:09:20.713175Z",
                    "end_date": null
                },
                "version": "3.0-test",
                "owner": "example_user",
                "start_date": "2015-10-06T17:21:18Z",
                "end_date": null
            },
            "new_application_version": {
                "id": "197629ba-b296-465f-9a78-9c1da0c4d1ea",
                "url": "https://atmobeta.iplantc.org/api/v2/image_versions/197629ba-b296-465f-9a78-9c1da0c4d1ea",
                "name": "3.0-test"
            }
        }

### Retrieve a Machine Request [GET]
+ Response 200 (application/json)

    [Machine Request][]
        
### Update a Machine Request [PATCH]
You can update the following properties for machine_requests you own:
- **title**: the title of the machine_request
- **text**: the contents of the machine_request
- **type**: the type of the machine_request (Full Text or URL *ONLY*)

+ Request (application/json)
  
        {
            "title": "Updated machine_request",
            "text": "https://atmobeta.iplantc.org/init_files/machine_requests/hello_world.py",
            "type": "URL"
        }

+ Response 200 (application/json)

    [Machine Request][]
    
### Delete a Machine Request [DELETE]
Delete a Machine Request.  Machine Requests can only be deleted if you were the one who created it. Deleteing a Machine Request will stop the
 boot script from being executed on any instances that have selected it again.

+ Response 200 (application/json)

    [Machine Request][]


## Machine Requests Collection [/machine_requests]
Collection of all Machine Requests.

+ Model (application/json)

    JSON representation of Machine Requests Collection Resource.

    + Body

        {
            "count": 1,
            "next": null,
            "previous": null,
            "results":
            [
                {
                    "id": 1,
                    "uuid": "5b8db071-27eb-477a-bd3a-8fef850ff581",
                    "url": "https://atmobeta.iplantc.org/api/v2/machine_requests/5b8db071-27eb-477a-bd3a-8fef850ff581",
                    "instance": {
                        "id": 20397,
                        "uuid": "554c5a89-6905-4d77-a752-1aec64b98480",
                        "url": "https://atmobeta.iplantc.org/api/v2/instances/554c5a89-6905-4d77-a752-1aec64b98480",
                        "name": "Development",
                        "status": "active",
                        "size": {
                            "id": 23,
                            "uuid": "39169ae0-bb4f-454f-bd5c-251d7b1ca319",
                            "url": "https://atmobeta.iplantc.org/api/v2/sizes/39169ae0-bb4f-454f-bd5c-251d7b1ca319",
                            "alias": "1",
                            "name": "tiny1",
                            "cpu": 1,
                            "disk": 0,
                            "mem": 4096,
                            "active": true,
                            "start_date": "2014-02-04T19:09:07.655411Z",
                            "end_date": null
                        },
                        "ip_address": "128.196.64.167",
                        "shell": true,
                        "vnc": true,
                        "identity": {
                            "id": "2360",
                            "uuid": "b33e5137-2337-45ae-9b80-523b87bc2873",
                            "url": "https://atmobeta.iplantc.org/api/v2/identities/b33e5137-2337-45ae-9b80-523b87bc2873",
                            "provider": 4
                        },
                        "user": 1,
                        "provider": 4,
                        "image": {
                            "id": 1155,
                            "url": "https://atmobeta.iplantc.org/api/v2/images/92818a5f-38f9-4c0f-adad-c987359ff0ae",
                            "uuid": "92818a5f-38f9-4c0f-adad-c987359ff0ae",
                            "name": "IDAC Server",
                            "description": "Updating description of the original application",
                            "icon": null,
                            "start_date": "2015-08-22T01:04:25Z",
                            "end_date": null,
                            "user": 1
                        },
                        "start_date": "2015-09-15T03:29:33Z",
                        "end_date": null
                    },
                    "identity": {
                        "id": "2360",
                        "uuid": "b33e5137-2337-45ae-9b80-523b87bc2873",
                        "url": "https://atmobeta.iplantc.org/api/v2/identities/b33e5137-2337-45ae-9b80-523b87bc2873",
                        "provider": 4
                    },
                    "status": {
                        "id": 2,
                        "url": "https://atmobeta.iplantc.org/api/v2/status_types/50643816-5aa7-4334-a7cd-e857bb902265",
                        "uuid": "50643816-5aa7-4334-a7cd-e857bb902265",
                        "name": "closed",
                        "description": "",
                        "start_date": "2015-01-26T07:00:00Z",
                        "end_date": null
                    },
                    "old_status": "completed",
                    "parent_machine": {
                        "id": 1981,
                        "uuid": "4a67757e-4818-485f-9c1d-d1db0b0e4148",
                        "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/4a67757e-4818-485f-9c1d-d1db0b0e4148",
                        "provider": {
                            "id": 4,
                            "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                            "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                            "name": "iPlant Cloud - Tucson",
                            "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                            "public": true,
                            "active": true,
                            "start_date": "2014-02-04T19:09:20.713175Z",
                            "end_date": null
                        },
                        "version": "2.0",
                        "owner": "example_user",
                        "start_date": "2015-09-14T04:56:57Z",
                        "end_date": null
                    },
                    "admin_message": "",
                    "new_application_name": "IDAC Server",
                    "new_application_description": "Updating description of the original application",
                    "new_application_visibility": "select",
                    "access_list": "[u'example_user']",
                    "iplant_sys_files": "[no files specified]",
                    "installed_software": "[no software specified]",
                    "exclude_files": "",
                    "new_version_name": "3.0-test",
                    "new_version_change_log": "test completed",
                    "new_version_tags": "[u'test']",
                    "new_version_memory_min": "0",
                    "new_version_cpu_min": "0",
                    "new_version_allow_imaging": true,
                    "new_version_forked": false,
                    "new_version_licenses": [],
                    "new_version_scripts": [],
                    "new_version_membership": [],
                    "new_machine_provider": {
                        "id": 4,
                        "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                        "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                        "name": "iPlant Cloud - Tucson",
                        "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                        "public": true,
                        "active": true,
                        "start_date": "2014-02-04T19:09:20.713175Z",
                        "end_date": null
                    },
                    "new_machine_owner": {
                        "id": 1,
                        "uuid": "333fe333-7c12-45a8-b15f-e75a75963d64",
                        "url": "https://atmobeta.iplantc.org/api/v2/users/333fe333-7c12-45a8-b15f-e75a75963d64",
                        "username": "example_user"
                    },
                    "start_date": "2015-10-06T17:11:06.494038Z",
                    "end_date": "2015-10-06T17:26:21.644705Z",
                    "new_machine": {
                        "id": 2073,
                        "uuid": "88753132-e71b-4867-a15b-fe825804854f",
                        "url": "https://atmobeta.iplantc.org/api/v2/provider_machines/88753132-e71b-4867-a15b-fe825804854f",
                        "provider": {
                            "id": 4,
                            "uuid": "c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                            "url": "https://atmobeta.iplantc.org/api/v2/providers/c734f3bc-e16d-499d-88db-f7319d2dd5a7",
                            "name": "iPlant Cloud - Tucson",
                            "description": "General purpose default provider. Allocation increases are based on availability, fair share, and a user's request history.",
                            "public": true,
                            "active": true,
                            "start_date": "2014-02-04T19:09:20.713175Z",
                            "end_date": null
                        },
                        "version": "3.0-test",
                        "owner": "example_user",
                        "start_date": "2015-10-06T17:21:18Z",
                        "end_date": null
                    },
                    "new_application_version": {
                        "id": "197629ba-b296-465f-9a78-9c1da0c4d1ea",
                        "url": "https://atmobeta.iplantc.org/api/v2/image_versions/197629ba-b296-465f-9a78-9c1da0c4d1ea",
                        "name": "3.0-test"
                    }
                }
            ]
        }


### List all Machine Requests [GET]
+ Response 200 (application/json)

    [Machine Requests Collection][]

### Create a Machine Request [POST]
Create a Machine Request.  You must specify the following properties:
- **access_list**: A list of usernames that will be allowed access to the new machine (If private or 'select').
- **exclude_files**: A list of files that should be excluded/ignored during the 'cleaning' step in the imaging process (when possible)
- **installed_software**: For internal tracking only, this is a list of installed software, as given by the user at request-time.
- **iplant_sys_files**: A list of system files that have been modified. This list will not be changed during the imaging process (when possible).
- **instance**: the instance ID *(Deprecated -- Will be provider_alias soon!)*
- **identity**: the identity ID *(Deprecated -- Will be UUID soon!)*
- **new_application_description**: The new description given to the application at request-time.
- **new_application_name**: The new name given to the application at request-time.
- **new_application_visibility**: The application-level visibility given to the application at request-time.
- **new_machine_owner**: The owner ID *(Deprecated -- Will be UUID soon!)*
- **new_machine_provider**: The Cloud Provider ID  *(Deprecated -- Will be UUID soon!)*
- **new_version_name**: The version name for this specific machine request.
- **new_version_allow_imaging**: Determine whether other users can 'fork' your application to make a copy for themselves.
- **new_version_change_log**: The version change-log for this specific machine request.
- **new_version_forked**: If true, 'fork' your version to create a brand new application, that you are the owner of. If false, 'update' the existing application and add this new version to the list.
- **new_version_cpu_min**: The minimum threshold of CPU required to launch this new machine.
- **new_version_memory_min**: The minimum threshold of RAM (in GB) required to launch this new machine.
- **tags**: A list of tags to be applied to the version.
- **new_version_licenses**: A list of licenses to be applied to the version.
- **new_version_scripts**: A list of scripts to be applied to the version.

+ Request (application/json)

        {
            "access_list":["example_user","example_user2"],
            "exclude_files":"[no files specified]",
            "installed_software":"[no files specified]",
            "instance":19694,
            "identity":"2360",
            "iplant_sys_files":"[no files specified]",
            "new_application_description":"Example description",
            "new_application_name":"Example of New Machine Request",
            "new_version_memory_min":"16",
            "new_version_cpu_min":"16",
            "new_application_visibility":"select",
            "new_machine_owner":1,
            "new_machine_provider":4,
            "new_version_allow_imaging":true,
            "new_version_change_log":"1.0 - An example version with an example change-log.",
            "new_version_forked":true,
            "new_version_name":"1.0-example",
            "tags":["test", "test2"]}
        }

+ Response 201 (application/json)
  [Machine Request][]
