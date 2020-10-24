# Nodejs Assignment

This assignment is tested and work on nodejs version v13.8.0 environment.

## Project Setup

```sh
npm install
```

## Start Command

```sh
npm run start
```


## API Docs


- Get all users
- Create user 
- Update user by id
- Delete user by id


   **1. Get All Users** 

   > Method: GET

   > URL: ```{{base_url}}/users```


   > Success Response(200):
    ```
          {
              success: true,
              data: User fetch successfully
          }
   ```

   **2. Create User**

   > Method: POST

   > URL: ```{{base_url}}/user/add```

   > Request Body: 

   ```
     {
        "name":"psbsh",
        "mobile_no":"7239237272",
        "email_id":"parveen@gmail.com",
        "address":"sdcsdcscsxaxs"
      } 
   ```

   > Success Response(200):
   ```
          {
              success: true,
              data: User created successfully
          }
   ```


   **3. Update user by Id**

   > Method: PUT

   > URL:  ```{{base_url}}/user/:id```

   > Request Body: 

   ```
     {
        "name":"psbsh",
        "mobile_no":"7239237272",
        "email_id":"parveen@gmail.com",
        "address":"sdcsdcscsxaxs"
      } 
   ```

   > Success Response(200):

   ```
          {
              success: true,
              data: User updated successfully
          }
   ```

   **4. Delete user by Id**

   > Method: DELETE

   > URL:  ```{{base_url}}/user/:id```

   > Success Response(200):

   ```
          {
              success: true,
              data: User deleted successfully
          }
   ```

