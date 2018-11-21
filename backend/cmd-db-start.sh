#!/usr/bin/env bash
docker run --name gobb-db -e POSTGRES_PASSWORD=gobb -e POSTGRES_USER=gobb -p 5432:5432 -d postgres

