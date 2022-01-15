package wechat

import (
	"fmt"

	"github.com/medivhzhan/weapp/v2"
)

//方法1： go httpClient
//方法2： 微信go语言客户端，官方没有，github第三方库做到这一点
type Service struct {
	AppId     string
	AppSecret string
}

func (s *Service) Resolve(code string) (string, error) {
	// project.config.json 里面appId

	resp, err := weapp.Login(s.AppId, s.AppSecret, code)
	if err != nil {
		return "", fmt.Errorf("weap.login : %v", err)
	}
	if resp.GetResponseError() != nil {
		return "", fmt.Errorf("weapp response error : %v", err)
	}
	return resp.OpenID, nil
}
