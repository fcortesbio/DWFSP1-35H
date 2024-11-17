from http.server import HTTPServer, SimpleHTTPRequestHandler

# Define server address and port
server_address = ('localhost', 8000)

# Create and start the HTTP server
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print(f"Serving on http://{server_address[0]}:{server_address[1]} ...")
httpd.serve_forever()