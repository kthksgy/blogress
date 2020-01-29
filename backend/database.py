'''
database.py - データベースの管理を行う
'''
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate

# データベース接続を行うSQLAlchemyインスタンス
db = SQLAlchemy()

# データベース中のモデルをJSONに変換するためのMarshmallowインスタンス
ma = Marshmallow()


def init(app):
    '''
    データベースの初期化を行います。
    Returns:
        Migrate: データベースのMigrateインスタンス
    '''
    db.init_app(app)
    ma.init_app(app)
    return Migrate(app, db)
