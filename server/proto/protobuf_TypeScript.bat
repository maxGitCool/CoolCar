:: protobuffer 转typeScript
@echo off
set PBTS_BIN_DIR=..\..\wx\miniprogram\node_modules\.bin
set PBTS_OUT_DIR=..\..\wx\miniprogram\service\proto_gen

%PBTS_BIN_DIR%\pbjs -t static -w es2020 trip.proto --no-create --no-encode --no-encode --no-verify --no-delimited -o %PBTS_OUT_DIR%/trip_pb.js && ^
%PBTS_BIN_DIR%\pbts -o %PBTS_OUT_DIR%/trip_pb.d.ts %PBTS_OUT_DIR%/trip_pb.js

