package main

import (
	"fmt"
	"github.com/jinzhu/configor"
	"strconv"
)

type ConfigHTTP struct {
	Host string `default:"0.0.0.0" env:"GOBB_HOST"`
	Port int   `default:"5678" env:"GOBB_PORT"`
}

type ConfigDB struct {
	Host     string `default:"127.0.0.1" env:"GOBB_PG_HOST"`
	Port     int   `default:"5432" env:"GOBB_PG_PORT"`
	User     string `default:"gobb" env:"GOBB_PG_USER"`
	Pass     string `default:"gobb" env:"GOBB_PG_PASS"`
	Database string `default:"gobb" env:"GOBB_PG_DATABASE"`
}

type ConfigAuth struct {
	JwtKey       string `default:"gobbjwtkey" env:"GOBB_JWT_KEY"`
	JwtAlgorithm string `default:"HMAC+SHA256" env:"GOBB_JWT_ALGO"`
}

type Config struct {
	AppName string `default:"gobb"`
	HTTP ConfigHTTP
	DB ConfigDB
	Auth ConfigAuth
}

var config = Config{}

func main() {
	configor.Load(&config, "config.yml")
	fmt.Printf("JWT Key: %s\n", config.Auth.JwtKey)

	app := App{}
	app.Initialize(&config)
	app.Run(config.HTTP.Host + ":" + strconv.Itoa(config.HTTP.Port))
}
