#!/usr/bin/env bash
migrate -source file://migrations -database postgres://gobb:gobb@localhost:5432/gobb?sslmode=disable up

