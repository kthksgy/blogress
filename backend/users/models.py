'''
users/models.py - usersのモデル
'''
from uuid import uuid4
from datetime import datetime
from werkzeug import generate_password_hash

from sqlalchemy import UniqueConstraint
from flask_marshmallow.fields import fields

from database import db, ma


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.BINARY(16), primary_key=True, default=lambda: uuid4().bytes)
    username = db.Column(db.String(32), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    rank = db.Column(db.Integer, nullable=False, default=100)

    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now, onupdate=datetime.now)

    UniqueConstraint('username', 'email')

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = generate_password_hash(password)

    def __repr__(self):
        return '<User %r>' % self.username


class UserSchema(ma.Schema):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'created_at', 'updated_at')
    id = fields.Method('hex')

    def hex(self, user):
        return user.id.hex()
