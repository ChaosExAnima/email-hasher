# Email Hasher

Client side app that takes environment var as salt to generate hashed emails for a given domain. Can support multiple domains.

Designed to be built into Docker containers, generated build folder can be used with any static host however. Please note salt will be exposed as plaintext! Be careful to use some form of authentication before allowing access.
