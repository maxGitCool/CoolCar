package mgo

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Set(v interface{}) bson.M {
	return bson.M{
		"$set": v,
	}
}

const IDField = "_id"

type ObjID struct {
	ID     primitive.ObjectID `bson:"_id"`
	OpenID string             `bson:"open_id"`
}
