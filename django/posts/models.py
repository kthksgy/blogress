import uuid
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Post(models.Model):
    # 記事ID(PRIMARY KEY)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # 著者
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # 記事タイトル
    title = models.CharField(max_length=64)
    # スラッグ(URLに使う記事識別子)
    slug = models.SlugField(unique=True)
    # サムネイルURL
    thumbnail = models.URLField(blank=True)
    # 記事本文
    body = models.TextField()
    # 記事の作成日時と更新日時
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title