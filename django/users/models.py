import uuid
from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.contrib.auth.base_user import BaseUserManager
  
  
class UserManager(BaseUserManager):
    """ユーザーマネージャー."""
  
    use_in_migrations = True
  
    def _create_user(self, email, password, **extra_fields):
        """Create and save a user with the given username, email, and
        password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
  
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
  
    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
  
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
  
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
  
        return self._create_user(email, password, **extra_fields)
  
  
class User(AbstractBaseUser, PermissionsMixin):
    """カスタムユーザーモデル."""
    id = models.UUIDField(default=uuid.uuid4,
                            primary_key=True, editable=False)
 
    email = models.EmailField(_('メールアドレス'), unique=True)
    username = models.CharField(_('ユーザー名'), unique=True, max_length=64)
 
    is_staff = models.BooleanField(
        _('スタッフ'),
        default=False,
        help_text=_(
            'この値が真なら、ユーザは admin サイトにアクセスできます。'),
    )
    is_active = models.BooleanField(
        _('有効'),
        default=True,
        help_text=_(
            'この値が真なら、このアカウントを使ってログインできます。'
            'アカウントを削除する代わりに、この値を False に設定してください。'
        ),
    )
    date_joined = models.DateTimeField(_('ユーザー作成日時'), default=timezone.now)
  
    objects = UserManager()
  
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
  
    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
 
    def get_full_name(self):
        full_name = '%s' % (self.username)
        return full_name.strip()
 
    def get_short_name(self):
        """Return the short name for the user."""
        return self.username
 
    def email_user(self, subject, message, from_email=None, **kwargs):
        """Send an email to this user."""
        send_mail(subject, message, from_email, [self.email], **kwargs)