
# MYP-Chickadee



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [Auth](#auth)
    1. [Register](#1-register)
    1. [Login](#2-login)
* [Comments](#comments)
    1. [Get all Comments for a PostId](#1-get-all-comments-for-a-postid)
    1. [Get Comment by id for a PostId](#2-get-comment-by-id-for-a-postid)
    1. [Create Comment](#3-create-comment)
    1. [Update Comment](#4-update-comment)
    1. [Delete Comment](#5-delete-comment)
* [Likes](#likes)
    1. [Get all Likes for a CommentId](#1-get-all-likes-for-a-commentid)
    1. [Get all Likes for a PostId](#2-get-all-likes-for-a-postid)
    1. [Create a Like for a PostId](#3-create-a-like-for-a-postid)
    1. [Create a Like for a CommentId](#4-create-a-like-for-a-commentid)
    1. [Delete a Like by Id](#5-delete-a-like-by-id)
* [Posts](#posts)
    1. [Get all Posts](#1-get-all-posts)
    1. [Get all Posts for a UserId](#2-get-all-posts-for-a-userid)
    1. [Get a Post by Id](#3-get-a-post-by-id)
    1. [Create Post](#4-create-post)
    1. [Update Post](#5-update-post)
    1. [Delete Post](#6-delete-post)
* [Users](#users)
    1. [Get all Users](#1-get-all-users)
    1. [Get Users by Id](#2-get-users-by-id)
    1. [Create User](#3-create-user)
    1. [Update User](#4-update-user)
    1. [Delete User](#5-delete-user)

--------



## Auth



### 1. Register



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/auth/register
```



***Body:***

```js
{
    "firstName": "Anoushka",
    "lastName": "Das",
    "email": "crazygirl@myp.com",
    "username": "Anoushka",
    "password": "test"
}
```



### 2. Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/auth/login
```



***Body:***

```js
{
    "username" : "Anoushka",
    "password" : "test"
}
```



## Comments



### 1. Get all Comments for a PostId



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/posts/1/comments
```



### 2. Get Comment by id for a PostId



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/1/posts/1/comments/2
```



### 3. Create Comment



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/26/comments
```



***Body:***

```js
{
        "content": "Oh NO!!",
        "authorId": 5,
        "postId": 26
}
```



### 4. Update Comment



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/2/Comments/4
```



***Body:***

```js
{
         "content": "Cannot agree more!"
}
```



### 5. Delete Comment



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/26/comments/12
```



***Body:***

```js
{
         "content": "I know they say that money talks, but all mine says is 'Goodbye'."
}
```



## Likes



### 1. Get all Likes for a CommentId



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/1/posts/8/comments/10/likes
```



### 2. Get all Likes for a PostId



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/3/posts/1/likes
```



### 3. Create a Like for a PostId



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/api/v1/authors/2/posts/23/likes
```



***Body:***

```js
{
        "likableId": 23,
        "likableType": "post",
        "authorId": 3
}
```



### 4. Create a Like for a CommentId



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/api/v1/authors/2/posts/23/comments/8/likes
```



***Body:***

```js
{
        "likableId": 8,
        "likableType": "comment",
        "authorId": 3
}
```



### 5. Delete a Like by Id



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/20/likes/1
```



***Body:***

```js
{
         "content": "I know they say that money talks, but all mine says is 'Goodbye'."
}
```



## Posts



### 1. Get all Posts



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/posts
```



### 2. Get all Posts for a UserId



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/1/posts/
```



### 3. Get a Post by Id



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/1/posts/8
```



### 4. Create Post



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts
```



***Body:***

```js
{
        "content": "Barcelona is out the Champion's League",
        "authorId": 3
}
```



### 5. Update Post



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/22
```



***Body:***

```js
{
         "content": "I know they say that money talks, but all mine says is 'Goodbye'."
}
```



### 6. Delete Post



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:3500/api/v1/authors/3/posts/25
```



***Body:***

```js
{
         "content": "I know they say that money talks, but all mine says is 'Goodbye'."
}
```



## Users



### 1. Get all Users



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors
```



### 2. Get Users by Id



***Endpoint:***

```bash
Method: GET
Type:
URL: http://localhost:3500/api/v1/authors/3
```



### 3. Create User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3500/api/v1/authors/
```



***Body:***

```js
{
    "firstName": "Anoushka",
    "lastName": "Das",
    "email": "crazygirl@myp-api.com",
    "username": "Anoushka",
    "password": "Test"
}
```



### 4. Update User



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:3500/api/v1/authors/6
```



***Body:***

```js
{
    "suffix": "Jr."
}
```



### 5. Delete User



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:3500/api/v1/authors/7
```



***Body:***

```js
{
    "suffix": "Jr."
}
```



---
[Back to top](#myp-chickadee)

>Generated at 2022-04-15 04:51:58 by [docgen](https://github.com/thedevsaddam/docgen)
