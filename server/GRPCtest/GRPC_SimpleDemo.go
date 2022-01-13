package main

// GRPC 简单demo
// 查看GRPC的传输格式二进制流
import (
	"encoding/json"
	"fmt"

	//trippb "worker/CoolCar/server/proto/gen/go"
	trippb "worker/CoolCar/server/proto/gen/go"

	"google.golang.org/protobuf/proto"
)

func main1() {
	trip := trippb.Trip{
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
	}

	fmt.Println("hello word")
	fmt.Println(&trip)
	// 生成二进制流
	b, err := proto.Marshal(&trip)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%X\n", b)
	// 解码二进制流
	var trip2 trippb.Trip
	err = proto.Unmarshal(b, &trip2)
	if err != nil {
		panic(err)
	}
	fmt.Println(&trip2)
	// json序列化

	b, err = json.Marshal(&trip2)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", b)

}
