from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _ 

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_("Email"), unique=True)
    cpf = models.CharField(_("CPF"), unique=True, max_length=14)
    data_nascimento =  models.DateField()
    phone = models.CharField(_("Telefone"), unique=True, max_length=15)
    nome = models.CharField(_("Nome completo"), max_length=300)

    USERNAME_FIELD = "cpf"
    REQUIRED_FIELDS = [cpf, email, phone]

    objects = CustomUserManager()

    def __str__(self):
        return self.email