# Blogpedia API

## User Management

`POST /api/signup`: Create a new user account.

`POST /api/login`: Authenticate a user and provide a token for future requests (for user sessions).

`GET /api/users/:id`: Retrieve user profile information.

`PUT /api/users/:id`: Update user profile information.

`DELETE /api/users/:id`: Delete a user account.

## Blog Posts

`GET /api/posts`: Retrieve a list of all blog posts.

`GET /api/posts/:id`: Retrieve a specific blog post.

`POST /api/posts`: Create a new blog post.

`PUT /api/posts/:id`: Update an existing blog post.

`DELETE /api/posts/:id`: Delete a blog post.

## Comments

`GET /api/posts/:post_id/comments`: Retrieve all comments for a specific post.

`GET /api/comments/:id`: Retrieve a specific comment.

`POST /api/posts/:post_id/comments`: Add a new comment to a post.

`PUT /api/comments/:id`: Update a comment.

`DELETE /api/comments/:id`: Delete a comment.
