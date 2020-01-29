'''
views.py - usersのビュー
'''
from flask import Blueprint, request, redirect, url_for, jsonify
from werkzeug import check_password_hash
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity

from .models import db, User, UserSchema
bp = Blueprint('user', __name__)


@bp.route('/', methods=['GET'])
def show():
    users = User.query.all()
    users_schema = UserSchema(many=True)
    return jsonify({
        'users': users_schema.dump(users)
    }), 200


@bp.route('/register', methods=['POST'])
def register():
    user = User(
        request.json['username'],
        request.json['email'],
        request.json['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({
        'message': 'User %s has been registered.' % request.json['username']
    }), 200


@bp.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({'message': 'Missing JSON in request'}), 400
    user = None
    if 'username' in request.json:
        user = User.query.filter_by(username=request.json['username']).first()
    elif 'email' in request.json:
        user = User.query.filter_by(email=request.json['email']).first()
    if not user:
        return jsonify({'message': 'Wrong authentication information'}), 401

    if check_password_hash(user.password, request.json['password']):
        token = create_access_token(identity=user.id.hex())
        return jsonify({'message': 'You are now logged in', 'token': token}), 200
    else:
        return jsonify({'message': 'Wrong authentication information'}), 401


@bp.route('/me', methods=['GET'])
@jwt_required
def me():
    me = User.query.filter_by(id=bytes.fromhex(get_jwt_identity())).first()
    me_schema = UserSchema()
    print(request.json)
    return jsonify({
        'me': me_schema.dump(me)
    }), 200
