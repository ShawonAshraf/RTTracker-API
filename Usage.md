# API Usage Example
## 1. POST /api/simloc

Send coordinates of some location (which should serve as your default location or starting location when the service starts).

Your request body should be like this

```json
{
    latitude, longitude
}
```

**Example**
```json
{
    {
	    "latitude": "43.7612372",
	    "longitude": "90.4322414"
    }
}
```
A successful request will return the following `JSON` response.
```json
{
    "message": "success",
    "code": 200
}
```

## 2. GET /
Returns the following `JSON` response.
```json
{
    "message": "RT Tracker API Index",
    "github": "https://github.com/ShawonAshraf/RTTracker-API"
}
```