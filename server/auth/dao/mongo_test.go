package dao

import (
	"context"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// 测试mongo测试
func TestResolveAccountID(t *testing.T) {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://admin:123456@192.168.99.100:27017/?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.7.0&directConnection=true&ssl=false"))
	if err != nil {
		t.Fatalf("cannot connection mongodb : + %v", err)
	}
	m := NewMongo(mc.Database("coolcar"))
	id, err := m.ResolveAccountID(c, "123")
	if err != nil {
		t.Errorf("fail ResolveAccountID for 123: + %v", err)
	} else {
		want := "61e189ada57cfcd02cf58344"
		if id != want {
			t.Errorf("resolve account id :want:%q,got:%q", want, id)
		}
	}

}
