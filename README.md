# Rails API only + React Boilerplate

A simple boilerplate that includes versionned routes, controllers, and API constraints, [Active Model Serializers](https://github.com/rails-api/active_model_serializers), etc. on the server side, with a React boilerplate included in /client 

# Getting Started
Navigate to the root directory and start your server with

```
bundle install
rails s
```

After that, navigate to the /client directory and run

```
npm install 
npm start
```

## Note

 If the API constraints are used, you'll have to include Request Headers like so:
 
`Accept: application/json;version=1`


TODO: token authentication
