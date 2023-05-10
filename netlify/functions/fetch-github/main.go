package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Contributions struct {
	Contributions      string `json:"contributions"`
	TotalContributions int    `json:"totalContributions"`
}

type Contribution struct {
	Color string `json:"color"`
	Count string `json:"contributionCount"`
	Level string `json:"contributionLevel"`
	Date  string `json:"date"`
}

func Handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	response, err := http.Get("https://github-contributions-api.deno.dev/axkeyz.json")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}

	var contributions Contributions
	json.Unmarshal(responseData, &contributions)

	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Headers:         map[string]string{"Content-Type": "text/plain"},
		Body:            strconv.Itoa(contributions.TotalContributions),
		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(Handler)
}
