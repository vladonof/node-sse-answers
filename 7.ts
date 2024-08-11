//The code manually implements an HTTP server using Node.js's net module by handling TCP connections directly.
//It parses incoming requests, determines the appropriate route, and generates a response with proper headers using a helper function.
//Each response is sent, and the connection is closed with socket.end() to prevent further writes.
//To run, `yarn install` and `yarn ts-node ./7.ts`
import { createServer } from "net";

const formatResponse = (
  statusCode: number,
  statusMessage: string,
  headers: { [key: string]: string },
  body: string,
) => {
  const headerLines = Object.entries(headers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\r\n");

  return `HTTP/1.1 ${statusCode} ${statusMessage}\r\n${headerLines}\r\n\r\n${body}`;
};

const server = createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const [requestLine] = request.split("\r\n");
    const [method, url] = requestLine.split(" ");

    if (method !== "GET") {
      const response = formatResponse(
        405,
        "Method Not Allowed",
        {
          "Content-Type": "text/plain",
        },
        "405 Method Not Allowed",
      );
      socket.write(response);
      socket.end();
      return;
    }

    if (url === "/time") {
      const currentTime = new Date().toISOString();
      const responseBody = JSON.stringify({ time: currentTime });
      const response = formatResponse(
        200,
        "OK",
        {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(responseBody).toString(),
        },
        responseBody,
      );
      socket.write(response);
      socket.end();
    } else if (url === "/data") {
      setTimeout(() => {
        const responseData = JSON.stringify({ data: "Here is your data!" });
        const response = formatResponse(
          200,
          "OK",
          {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(responseData).toString(),
          },
          responseData,
        );
        socket.write(response);
        socket.end();
      }, 1000);
    } else {
      const response = formatResponse(
        404,
        "Not Found",
        {
          "Content-Type": "text/plain",
        },
        "404 Not Found",
      );
      socket.write(response);
      socket.end();
    }
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
