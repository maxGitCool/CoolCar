protoc --go_out=.  trip.proto
protoc --go-grpc_out=. trip.proto
protoc --grpc-gateway_out=. --grpc-gateway_opt grpc_api_configuration=trip.yaml trip.proto