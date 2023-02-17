# Books Archive
Stores and holds information about Books

## Technology used
- MongoDB
- ExpressJS
- React
- NodeJS
- Bootstrap
- Docker
- Nginx

## Setup
Branch (Main)
1.  Create a database in MongoDB
2.  Create .env file in the backend folder
3.  Copy connection string from MongoDB and paste into the .env file as follows

ATLAS_URI="connection string" 

4.  In terminal cd into frontend folder and run the command

```bash
npm start
```

Branch (Docker)
1.  Create a database in MongoDB
2.  Create a .env file in the project directory 
3.  Copy connection string from MongoDB and paste into the .env file as follows
    
ATLAS_URI="connection string" 

4.  To build the docker images, run the command:

```bash
docker-compose build
```

5.  To start the application 

```bash
docker-compose up
``` 

## Application
### Main Pages
![screenshot1](https://user-images.githubusercontent.com/92265482/201169345-743b8799-a394-4877-8748-3ed04210685b.JPG)
![screenshot4](https://user-images.githubusercontent.com/92265482/201169542-2eb36738-e6f0-4b92-b98b-190cf63eef47.JPG)

### Add and Update a Book
![screenshot2](https://user-images.githubusercontent.com/92265482/201169471-4f8fe708-3933-42e5-ad18-81beb4a564f2.JPG)
![screenshot3](https://user-images.githubusercontent.com/92265482/201169484-89492a5d-0de3-412c-b3ff-1abbe8720bf5.JPG)

### Add and Update a Author
![screenshot5](https://user-images.githubusercontent.com/92265482/201169555-c23de721-9732-4ce5-a667-ef540bf6063d.JPG)
![screenshot6](https://user-images.githubusercontent.com/92265482/201170059-022f53a5-11cd-46c4-94c6-662069d77110.JPG)
