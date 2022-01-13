// type AuthServiceServer interface {
// 	Login(context.Context, *LoginRequest) (*LoginResponse, error)
// 	mustEmbedUnimplementedAuthServiceServer()
// }
package auth

import (
	"context"
	authpb "worker/CoolCar/server/auth/api/gen/v1"

	"go.uber.org/zap"
)

type Service struct {
	Logger zap.Logger
}

func (s *Service) Login(c context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	s.Logger.Info("received code", zap.String("code", req.Code))
	return nil, nil
}
func (*Service) mustEmbedUnimplementedTripServiceServer() {}
