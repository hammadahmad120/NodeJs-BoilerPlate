# NodeJs-BoilerPlate
Well Structured node js boilerplate for backend web projects which will make your codebase maintainable, scableable, readablel, consistant and error free  

# Steps to start project
- npm i
- npm run start
- Place your jwt secret in JWT_SECRET variable in .env.development file

# Endpoints
- POST on the endpoint /api/user/createUser (create a new user)
- POST on the endpoint /api/user/login (login user with email and password, you can see mocked user data in models folder for credentials)
Note: token returned from this endpoint need to be passed as x-auth-token header for all post module endpoints
- POST on the endpoint /api/post (create new post)
- PUT on the endpoint /api/post (update post)
- GET on the endpoint /api/post (get all posts for logged in user)
- DELETE on the endpoint /api/post/:postId (remove a specific post)

# Postman Collection
In this repository we have **Node-boilerplate.postman_collection.json** file which can be directly imported in postman application to execute endpoints


