package main

import (
	"context"
	"log"
	trippb "worker/CoolCar/server/proto/gen/go"

	"google.golang.org/grpc"
)

func main() {

	conn, err := grpc.Dial("127.0.0.1:8081", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	tsClient := trippb.NewTripServiceClient(conn)
	r, err := tsClient.GetTrip(context.Background(), &trippb.GetTripRequest{
		Id: "trip 123456",
	})
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	log.Println(r)
}
