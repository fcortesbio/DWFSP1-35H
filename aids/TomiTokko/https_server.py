from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

# Define server address and port
server_address = ('localhost', 4443)

# Create HTTP server
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

# Create SSLContext and wrap the socket
context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile="cert.pem", keyfile="key.pem")

# Wrap the HTTP server's socket with SSL
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print(f"Serving on https://{server_address[0]}:{server_address[1]} ...")
httpd.serve_forever()
