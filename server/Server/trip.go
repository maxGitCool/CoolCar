package trip

import (
	"context"
	trippb "worker/CoolCar/server/proto/gen/go"
)

// 实现的服务接口
// type TripServiceServer interface {
// 	GetTrip(context.Context, *GetTripRequest) (*GetTripResponse, error)
// 	mustEmbedUnimplementedTripServiceServer()
// }

type Service struct {
	*trippb.UnimplementedTripServiceServer
}

// 实现服务器端的接口GetTrip
func (*Service) GetTrip(c context.Context, req *trippb.GetTripRequest) (*trippb.GetTripResponse, error) {
	return &trippb.GetTripResponse{
		Id: req.Id,
		Trip: &trippb.Trip{
			Start:       "abc",
			End:         "def",
			DurationSec: 3600,
			FeeCent:     1000,
			StartPos: &trippb.Location{
				Latitude:  30,
				Longitude: 120,
			},
			EndPos: &trippb.Location{
				Latitude:  35,
				Longitude: 115,
			},
			PathLocations: []*trippb.Location{
				{
					Latitude:  31,
					Longitude: 116,
				},
				{
					Latitude:  32,
					Longitude: 117,
				},
			},
			Status: 2,
		},
	}, nil
}

func (*Service) mustEmbedUnimplementedTripServiceServer() {}
