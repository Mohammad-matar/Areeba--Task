## Micro Service Number Validator.

## Project Description:

The requirement for this project were to include customers CRUD and validate the phone number using an API.

## Used Languages/Library

The API that I used was : Abstract, implementing react and material-UI for the Front Side and node for the back whole developing my data base with mongoDB.

## Pull The Project

To pull this project : https://github.com/Mohammad-matar/Areeba--Task

![Areeba ](https://datavirtuality.com/wp-content/uploads/2021/08/areeba-logo.png)

## How to Run the app

To install the all packages use:

```cli
npm install
```

This command will read the package.json file and install all the required dependencies, such as, `express` and `mongoose`.

To run the Frontend and backend parts:

```cli
npm start
```

## Testing CRUD

### Validation for a number

Validate a number. Get more information about it.

**GET** `http://localhost:3000/customers/validate/${number}`

Sample **Response** if valid:

```json
{
  "status": 200,
  "countryCode": "+961",
  "countryName": "Lebanon",
  "operatorName": "Alfa"
}
```

Sample **Response** if invalid:

```json
{
  "status": 400
}
```

### Get list of all customers

No body required. Will return list of all customers.

**GET** `http://localhost:3000/customers`

Sample **Response**:

```json
{
  "data": [
    {
      "_id": "62d7a9ed2c174052bd168172",
      "name": "Mohammad Matar",
      "address": "Mina1",
      "phone_number": "+96176173976",
      "createdAt": "2022-07-20T07:08:29.408Z",
      "updatedAt": "2022-07-20T17:33:15.762Z",
      "__v": 0
    },
    {
      "_id": "62d7aa212c174052bd16817a",
      "name": "Zaynab Abd El Nabi",
      "address": "Mina1",
      "phone_number": "+96176173976",
      "createdAt": "2022-07-20T07:09:21.348Z",
      "updatedAt": "2022-07-20T17:25:32.359Z",
      "__v": 0
    },
    {
      "_id": "62d8fe6dce6750e7ef7ed008",
      "name": "Hadi Hayek",
      "address": "Tripli",
      "phone_number": "+96176173976",
      "createdAt": "2022-07-21T07:21:17.725Z",
      "updatedAt": "2022-07-21T07:22:14.818Z",
      "__v": 0
    }
  ]
}
```

### Get a specific customer

No Body required. Will get details of specific customer

**GET** `http://localhost:3000/customers/:id`

Sample **response**:

```json
{
  "sucess": true,
  "response": {
    "_id": "62d7a9ed2c174052bd168172",
    "name": "qqqqqqaa",
    "address": "Mina1",
    "phone_number": "71888885",
    "createdAt": "2022-07-20T07:08:29.408Z",
    "updatedAt": "2022-07-20T17:33:15.762Z",
    "__v": 0
  }
}
```

### Add a new customer

Body must be JSON. Adds a new customer. Phone number must be valid

Sample **body**:

```json
{
  "name": "Mohammad Matar",
  "address": "Tripoli - Lebanon",
  "phone_number": "+96171728733"
}
```

**POST** `http://localhost:3000/customers`

**Response** will have the same data, plus an \_id property.

```json
{
  "success": true,
  "message": "Get User Successfully",
  "response": {
    "name": "Mohammad Matar",
    "address": "Tripoli - Lebanon",
    "phone_number": "+96171728733",
    "_id": "62d9c99f5b8167d3e144c5e7",
    "createdAt": "2022-07-21T21:48:15.105Z",
    "updatedAt": "2022-07-21T21:48:15.105Z",
    "__v": 0
  }
}
```

**Response** invalid phone_number.

```json
{
  "success": false,
  "message": "phone number is invalid"
}
```

### Edit an existing customer

Body must be JSON. Edit an existing customer. with the id of the customer we want to edit.

Sample **body**:

```json
{
  "name": "Mohammad Matar"
}
```

**PUT** `http://localhost:3000/customers/:id`

**Response** will get data for the edition

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### Delete a customer

No body required. Customer id will come from the URL.

**DELETE** `http://localhost:3000/customers/:id`

**Response** for the delete will just be the id for the deleted customer

```json
{
  "success": true,
  "response": {
    "_id": "62d7a9ed2c174052bd168172",
    "name": "Mohammad Matar",
    "address": "Mina1",
    "phone_number": "+96176173976",
    "createdAt": "2022-07-20T07:08:29.408Z",
    "updatedAt": "2022-07-20T17:33:15.762Z",
    "__v": 0
  }
}
```

Enjoy Testing :heart:
