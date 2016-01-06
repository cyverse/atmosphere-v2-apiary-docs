# Group Version
The version endpoint allows users to see the version of Atmosphere they are currently using. The Troposphere version can be viewed at https://iplantc.org/tropo-api/version

## Atmosphere Version [/version]
Retrieve the current Atmosphere version

+ Model (application/json)

    + Body
            {
               "git_sha": "d95baa954c53583452b207de0f7bcc4de633976",
                "git_sha_abbrev": "@d95baa",
                "short": "0.14.3",
                "verbose": "0.14.3 dev 0 @d95baa",
                "normal": "0.14.3 dev 0",
                "commit_date": "2016-01-06T10:24:22-07:00",
                "git_branch": "kicking-kestrel",
                "branch": "0.14",
                "tertiary": ".3" 
            }

### Retrieve Atmosphere version [GET]
+ Response 200 (application/json)

    [Atmosphere Version][]


## Troposphere Version [/version]
Retrieve the current Troposphere version

+ Model (application/json)

    + Body
            {
                git_sha": "3f524b5c3eac7262925ca9bad39931efb8b9eb1", 
                "git_sha_abbrev": "@3f524b", 
                "git_branch": "kicking-kestrel", 
                "commit_date": "2016-01-05T16:42:22-07:00"
            }

### Retrieve Troposphere version [GET]
+ Response 200 (application/json)
       
    [Troposphere Version][]

