set PROTO_PATH=auth\api

protoc --go_out=.  %PROTO_PATH%\auth.proto
protoc --go-grpc_out=. %PROTO_PATH%\auth.proto
protoc --grpc-gateway_out=. --grpc-gateway_opt grpc_api_configuration=%PROTO_PATH%\auth.yaml %PROTO_PATH%\auth.proto

cmd