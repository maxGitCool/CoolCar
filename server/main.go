package main

import (
	"CoolCar/auth/auth"
	"CoolCar/auth/dao"
	"CoolCar/auth/wechat"
	"context"
	"log"
	"net"
	authpb "worker/CoolCar/server/auth/api/gen/v1"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

// 启动登陆GRPC服务
func main() {
	logger, err := newZapLogger()
	if err != nil {
		log.Fatalf("cannot create logger : %v", err)
	}
	lis, err := net.Listen("tcp", ":8081")
	if err != nil {
		logger.Fatal("cannot listen ", zap.Error(err))
	}
	// mongodb
	c := context.Background()
	mongoClient, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://admin:123456@192.168.99.100:27017/?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.7.0&directConnection=true&ssl=false"))
	if err != nil {
		logger.Fatal("cannot connection mongodb : + %v", zap.Error(err))
	}

	// 3d745384c9e3ffb097a58ef30bf99876
	s := grpc.NewServer()
	authpb.RegisterAuthServiceServer(s, &auth.Service{
		OpenIDResolver: &wechat.Service{
			AppId:     "wxebd9cab99716914e",
			AppSecret: "3d745384c9e3ffb097a58ef30bf99876",
		},
		Mongo:  dao.NewMongo(mongoClient.Database("coolcar")),
		Logger: logger,
	})

	err = s.Serve(lis)
	logger.Fatal("cannot listen to ", zap.Error(err))
}

func newZapLogger() (*zap.Logger, error) {
	cfg := zap.NewDevelopmentConfig()
	cfg.EncoderConfig.TimeKey = ""
	return cfg.Build()
}
