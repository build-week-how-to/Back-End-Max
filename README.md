# Back-End-Max

# Server Guide ⬇︎

**For Users**
| [Register](#register) | [Login](#login) | 

**For How Tos**
| [Get All How Tos](#get-all-how-tos) | [Get Individual How Tos](#get-individual-how-tos) | [Add How To](#add-how-to) | [Update How To](#update-how-to) | [Delete How To](#delete-how-to) |

**For Steps**
| [Get All Steps](#get-all-how-steps) | [Get Individual Steps](#get-individual-steps) | [Add Step](#add-step) | [Update Step](#update-step) | [Delete Step](#delete-step) |

**For Testing**
| [Tests](#tests) | [Users Tests](#users-tests) | [How To Tests](#how-to-tests) | [Steps Tests](#steps-tests) | 

--- 
# Base Url ⬇︎
    https://build-week-how-to.herokuapp.com

*Headers:*
| Name          | Value             | Required |
| ------------- | ----------------- | -------- |
| Content-Type  | application/json  | Yes      |

---
# Register a User ⬇︎ <a name="register"></a>

### Method: [ POST ]

    /api/users/register

### Body:
```
{ 
    'username': Max , 
    'password': Max 
}
```
## - Status Codes -
> ## 201 Created:
```
{
    "id": 1,
    "username": "Max"
}
```
> ## 406 Not Acceptable:
```
{
    "message": "Missing required field ( username, password )."
}
```
---
# Login ⬇︎ <a name="login"></a>

#### Method: [ POST ]

    /api/users/login

### Body:
``` 
{ 
    'username': Max , 
    'password': Max
}
```
## - Status Codes -
> ## 200 OK:
```
{
    "message": "Welcome Max 👋🏼",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Ik1heCIsImlhdCI6MTU1OTg3MDAzNSwiZXhwIjoxNTYwMzAyMDM1fQ.wpLqv-bWJCaYym90I1uyYqamUHEeA8YSA8Phj11TxKQ"
}
```
> ## 406 Not Acceptable:
```
{
    "message": "Missing required field ( username or password )."
}
```
---

# Get All How Tos ⬇︎ <a name="get-all-how-tos"></a>

### Method: [ GET ]

    /api/howto

### Server will return:
```
[
    {
        "id": 1,
        "url": null,
        "title": "Test",
        "created_at": "2019-06-07 01:16:26",
        "updated_at": "2019-06-07 01:16:26"
    }
]
```
---

# Get Individual How To ⬇︎ <a name="get-indivdual-how-tos"></a>

### Method: [ GET ]

    /api/howto/:id

### Server will return:
```
{
    "id": 1,
    "url": null,
    "title": "Test",
    "created_at": "2019-06-07 01:16:26",
    "updated_at": "2019-06-07 01:16:26",
    "steps": [
        {
            "id": 4,
            "step": "Step Added",
            "howtoId": 1
        },
        {
            "id": 5,
            "step": "This is a step",
            "howtoId": 1
        }
    ]
}
```
---

## Add How To ⬇︎ <a name="add-how-to"></a>

### Method: [ POST ]

    /api/howto

### Body:

```
{ 
    'title': Test , 
    'url': ( optional for adding thumbnails ) 
}
```
## - Status Codes -
> ## 201 Created:
```
{
    "message": "Added Successfully"
}
```
> ## 500 Internal Server Error:
```
500
```
---

# Update How To ⬇︎ <a name="update-how-to"></a>

### Method: [ PUT ]

    /api/howto/:id

### Body:
```
{ 
    'title': Testing123 , 
    'url': ( optional for adding thumbnails ) 
}
```
## - Status Codes -
> ## 200 OK:
```
{
    "message": "Updated Successfully"
}
```
> ## 400 Bad Request:
```
{
    "message": "Missing Title"
}
```
---

## Delete How To ⬇︎ <a name="delete-how-to"></a>

### Method: [ DELETE ]

    /api/howto/:id

## - Status Codes -
> ## 200 OK:
```
{
    "message": "How to sucessfully deleted"
}
```
> ## 404 Not Found
```
{
    "message": "Can not find How To to delete"
}
```
---

## Get All Steps ⬇︎ <a name="get-all-steps"></a>

### Method: [ GET ]

    /api/steps

## - Status Codes -
> ## 200 OK:
```
[
    {
        "id": 4,
        "step": "Step Added",
        "howtoId": 1
    },
    {
        "id": 5,
        "step": "This is a step",
        "howtoId": 1
    }
]
```
---

# Get Individual Steps ⬇︎ <a name="get-individual-steps"></a>

### Method: [ GET ]

    /api/steps/:id

## - Status Codes -
> ## 200 OK:
```
{
    "id": 4,
    "step": "Step Added",
    "howtoId": 1
}
```
> ## 500 Internal Server Error:
```
{
    "message": "Server error getting individual Steps",
    "error": {}
}
```
---

# Add Step ⬇︎ <a name="add-step"></a>

### Method: [ POST ]

    /api/steps

### Body:
```
{
	"howtoId": 2,
	"step": "This is another step"
}
```

## - Status Codes -
> ## 201 Created:
```
{
    "message": "Step Successfully Added",
    "newStep": {
        "id": 6,
        "step": "This is another step",
        "howtoId": 2
    }
}
```
> ## 406 Not Acceptable:
```
{
    "message": "howtoId or Step Info field is empty"
}
```
---

# Update Step ⬇︎ <a name="update-step"></a>

### Method: [ PUT ]

    /api/steps/:id

## Body:
```
{ 
	"step": "This is an updated step" 
}
```

## - Status Codes -
> ## 200 OK:
```
{
    "message": "Sucessfully updated",
    "updated": {
        "id": 4,
        "step": "This is an updated step",
        "howtoId": 2
    }
}
```
> ## 500 Internal Server Error:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Error</title>
    </head>
    <body>
        <pre>Internal Server Error</pre>
    </body>
</html>
```
---

# Delete Step ⬇︎ <a name="delete-step"></a>

### Method: [ DELETE ]

    /api/steps/:id

## - Status Codes -
> ## 200 OK:
```
{
    "message": "Step sucessfully deleted"
}
```
> ## 404 Not Found:
```
{
    "message": "Can not find step to delete"
}
```
---
        

# Tests ⬇︎ <a name="tests"></a>

List of tests for the server:

## Sanity Check:
    ●   Should set the testing env 
    ●   Should return JSON
    ●   Should return status code 200
    ●   Should return { message: "Sup ✌🏼 -Server" }
        

# For Users ⬇︎ <a name="users-tests"></a>

## Login:
    ●   Should return status 404 if user doesnt exist
    ●   Should return OK status code 200
    ●   Should require authorization

## Register:
    ●   Should return length of 1
---
# How Tos ⬇︎ <a name="how-to-tests"></a>

## Get All How Tos:
    ●   Should set the testing env
    ●   Should be in application/json

## Get Individual How To:
    ●   Should return length of 1
    ●   Should return JSON format

## Add How To:
    ●   Should return the title of the how to that you add
    ●   Should return JSON format

## Update How To:
    ●   Should return status 200

## Delete How To:
    ●   Should return 200 if deleted successfully
    ●   Should return 404 of it doesnt exist

        
---
# Steps ⬇︎ <a name="steps-tests"></a>

## Get All Steps:
    ●   Should set the testing env
    ●   Should be in application/json

## Get Step By Id:
    ●   Should return status 200
    ●   Should be in application/json

## Add Step:
    ●   Should return length of 1
    ●   Should return 406 if missing info

## Update Step:
    ●   Should be in application/json
    ●   Should return status 200

## Delete Step:
    ●   Should return 200 if deleted successfully
    ●   Should return 404 of it doesnt exist