#!/usr/bin/env bash
curl --header "Content-Type: application/json" \
     -X POST \
     --data '{"username":"Tom","body":"TESTBODY"}' \
     http://localhost:5678/comment

