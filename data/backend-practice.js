//sending HTTP message using built-in class XMLHttpRequest
const xhr = new XMLHttpRequest();

// open() first parameter = type of HTTP Message such as GET, POST, PUT, DELETE
// open() second parameter = a URL to send a computer the HTTP message
// URL is an address, but for the Internet
// URL helps us locate another computer on the Internet
// example https://amazon.com means the sending customer computer uses http channel to send HTTP information thru one of Amazon computer that's why it is .com HAHHAHHAHA

//load means the response has been loaded
// the sec parameter is a function after the response has loaded
// the code below retrieves the response of sending an HTTP request
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

//Request-Response Cycle, 1 req, 1 response

//Send different messages using URL paths
// URL path are the path after URL
// example the URL is /hello
// https://supersimplebackend.dev/hello

// backend only supports certain sets of URL paths

//Status code
//Status codes starts with 4 or 5 (400, 404, 500) = failed (backend problem or it crashed)
//Status code starts with 2 (200, 201, 204) = succeeded

//Backend API (Application Programming Interface) - List of URL Paths

//when we type a URL in the browser, it actually sends a GET request

//using the browser = making a GET request
