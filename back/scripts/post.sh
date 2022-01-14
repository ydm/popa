#!/usr/bin/env bash

curl \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"author": "somebody", "title": "clickbait", "body": "something"}' \
    http://localhost:8000/api/nodes/
