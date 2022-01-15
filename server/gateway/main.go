package main

import (
	"log"
	"net/http"
	authpb "worker/CoolCar/server/auth/api/gen/v1"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/encoding/protojson"
)

func main() {
	startGRPCGateWay()
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
	err := authpb.RegisterAuthServiceHandlerFromEndpoint(
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
