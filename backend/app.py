'''
app.py - アプリケーションのエントリポイント
'''
from flask import Flask
from flask_jwt_extended import JWTManager

# データベース管理のインポート
import database

# ブループリントモジュールのインポート
import users

# APIサーバーの本体であるFlaskインスタンス
app = Flask(__name__)

app.config.from_json(r'./config.json')

jwt = JWTManager(app)

# データベースの初期化
migrate = database.init(app)

# ブループリントの登録
app.register_blueprint(users.views.bp, url_prefix='/users')
