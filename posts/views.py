from rest_framework import generics, permissions, viewsets, mixins

from .models import Post
from .permissions import IsAuthorOrReadOnly # 追加
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer