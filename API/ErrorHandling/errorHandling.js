//fetch() only rejects on network errors (like no internet).
//For HTTP errors like 404, 401, or 500, you must check response.ok or response.status.
//response.ok  :- it return true if Status code is 200–299 otherwise false.
//response.status   :- gives the exact numeric status code.
/*
200: ok, 
201: created, 
204: No Content (Success, but no response body), 
400: bad request(invalid data),
401: Unauthorized
403: Forbidden (Access denied)
404: Not Found
500: Internal Server Error (Server-side problem)
*/

//1)
//.catch() does not handle HTTP error status codes by itself. It only handles rejected Promises.
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//2)
// response.ok used to detect HTTP errors. Throw an Error to reject the Promise, then .catch() handles it.
fetch("https://jsonplaceholder.typicode.com/use") //404
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong: ", err.message);
  });
