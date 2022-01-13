set PBTS_BIN_DIR=..\wx\miniprogram\node_modules\.bin
set PBTS_OUT_DIR=..\wx\miniprogram\service\proto_gen\auth
set PROTO_PATH=auth\api

:: 删除文件夹及下面所有文件
rd /s /q %PBTS_OUT_DIR%
::重新创建文件夹
md %PBTS_OUT_DIR%
:: 生成js文件auth_pb_tmp.js
:: 生成auth_pb.js
:: 复制auth_pb_tmp.js内容到auth_pb.js文件中
:: 根据auth_pb.js生成auth_pb.d.ts
:: 删除临时文件auth_pb_tmp.js
%PBTS_BIN_DIR%\pbjs -t static -w es6 %PROTO_PATH%\auth.proto --no-create --no-encode --no-encode --no-verify --no-delimited -o %PBTS_OUT_DIR%\auth_pb_tmp.js && ^
echo import * as $protobuf from "protobufjs";  >> %PBTS_OUT_DIR%\auth_pb.js && ^
type %PBTS_OUT_DIR%\auth_pb_tmp.js >> %PBTS_OUT_DIR%\auth_pb.js && ^
%PBTS_BIN_DIR%\pbts -o %PBTS_OUT_DIR%/auth_pb.d.ts %PBTS_OUT_DIR%\auth_pb.js && ^
del /f /s /q %PBTS_OUT_DIR%\auth_pb_tmp.js
