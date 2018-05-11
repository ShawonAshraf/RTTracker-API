# RT Tracker API
> Real time location tracking API for RT Tracker iOS Demo App

## How it works
The API gets a coordinate via `HTTP POST` request. Then it parses the request and sends the coordinate to a `Pusher` app service which simulates movement on a map based on coordinates.

## Dependencies
*Check the [package.json](package.json) file*

## Usage
- Clone the repo
- `cd` into the directory
- Install `npm` packages

```bash
npm install
```

- Start the server

```bash
npm start
```
- For running tests

```bash
npm run test-watch
```


- Use [Postman](https://www.getpostman.com) to send `HTTP` requests.

## API Keys for Pusher
Head over to [Pusher](https://pusher.com), sign up and get your API key.

## API Usage Examples
For API usage examples, see [Usage](Usage.md)