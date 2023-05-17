package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

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

type GithubTotalData struct {
	Contributions int `json:"contributions"`
	Projects      int `json:"projects"`
}

func FetchAPI(api string, class interface{}) {
	response, err := http.Get(api)

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	json.Unmarshal(responseData, &class)
}

func Handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	var contributions Contributions
	FetchAPI("https://github-contributions-api.deno.dev/axkeyz.json", &contributions)

	var total = GithubTotalData{
		Contributions: contributions.TotalContributions,
		Projects:      100,
	}

	outputData, err := json.Marshal(total)
	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}

	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Headers:         map[string]string{"Content-Type": "application/json"},
		Body:            string(outputData),
		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(Handler)
}
