// type AuthServiceServer interface {
// 	Login(context.Context, *LoginRequest) (*LoginResponse, error)
// 	mustEmbedUnimplementedAuthServiceServer()
// }
package auth

import (
	"CoolCar/auth/dao"
	"context"
	authpb "worker/CoolCar/server/auth/api/gen/v1"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	OpenIDResolver OpenIDResolver
	Logger         *zap.Logger
	Mongo          *dao.Mongo
	*authpb.UnimplementedAuthServiceServer
}
type OpenIDResolver interface {
	Resolve(code string) (string, error)
}

func (s *Service) Login(c context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	s.Logger.Info("received code", zap.String("code", req.Code))
	openId, err := s.OpenIDResolver.Resolve(req.Code)
	if err != nil {
		return nil, status.Errorf(codes.Unavailable, "cannot resolve openId:%v", err)
	}

	accountId, err := s.Mongo.ResolveAccountID(c, openId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "")
	}
	return &authpb.LoginResponse{
		AccessToken: "token for " + accountId,
		ExpiresIn:   7200,
	}, nil
}
