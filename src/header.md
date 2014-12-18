FORMAT: 1A
HOST: https://atmobeta.iplantc.org/api/v1

# Atmosphere
Atmosphere is a private, self-service cloud computing platform that supports research efforts in the plant sciences
community.  It addresses the growing need for customized computational resources and provides the community with
access to:
  
  1. Infrastructure as a Service (IaaS), accessible through a web portal or by API
  2. Platform as a Service (PaaS), for developing and deploying software to the scientific community
  3. Software as a Service (SaaS), with preconfigured, frequently used analysis routines, algorithms, and
  datasets designed to accommodate computationally and data-intensive bioinformatics tasks.

<span style="color:orange;">NOTE: These API docs are currently IN DEVELOPMENT.</span>
 
## Useful Links

   - [Atmosphere Homepage](http://www.iplantcollaborative.org/ci/atmosphere)
   - [Atmosphere on GitHub](https://github.com/iPlantCollaborativeOpenSource/atmosphere)

## Pagination
All collections that support pagination will return a paginated list.  The collections that do not support pagination
 will not return a paginated list (all results that exist will be returned).  Since Atmosphere uses Django Rest Framework
 as the API framework, it is reasonable to allow whatever is most natural to implement in that framework to flavor the
 language of the API.  To that end, the following query parameters control pagination:

   - **page**: the page of results to return
   - **page_size**: the number of results per page

## Authorization
Except where explicitly stated (images, tags) all endpoints require authorization.  This is achieved by obtaining an
 access token and placing the token in the Authorization Header like so:

    Authorization: TOKEN [access_token]
