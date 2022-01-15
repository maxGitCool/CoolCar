package main

import (
	"log"
	"net"
	"net/http"

	trip "worker/CoolCar/server/Server"
	trippb "worker/CoolCar/server/proto/gen/go"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/encoding/protojson"
)

// GRPC 测试
// 1. 服务器端实现 Server/trip.go
// 2. 客户端实现 Client/main.go
// 3. 此函数是运行服务器端
func mainGRPC() {
	listener, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	srv := grpc.NewServer()
	trippb.RegisterTripServiceServer(srv, &trip.Service{})
	log.Fatal(srv.Serve(listener))
}

// GRPC GetWay 测试 ====> 可以让http请求GRPC服务
func main() {

	go startGRPCGateWay()

	listener, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	srv := grpc.NewServer()
	trippb.RegisterTripServiceServer(srv, &trip.Service{})
	log.Fatal(srv.Serve(listener))
}

func startGRPCGateWay() {
	c := context.Background()          // 没有内容的上下文
	c, cancel := context.WithCancel(c) //上下文可以cancel的能力
	defer cancel()                     //直接调用

	// mx:miltiplex  分发器
	//WithMarshalerOption 控制GRPC与JSON格式转换
	mux := runtime.NewServeMux(runtime.WithMarshalerOption(
		runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers: true,
				UseProtoNames:  true,
			},
			UnmarshalOptions: protojson.UnmarshalOptions{},
		},
	))
	//GRPC GateWay做客户端去连接GRPC的Trip的GRPC服务器
	err := trippb.RegisterTripServiceHandlerFromEndpoint(
		c,
		mux,
		":8081",
		[]grpc.DialOption{grpc.WithInsecure()}, //TCP明文
	)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	// GRPC GateWay自己也会有一个监听端口，对外http://localhost:8080/trip/{id} 可访问
	err = http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

}
