
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):

    email = models.EmailField(null=True)
    phone_number = models.CharField(max_length=20)
    birth_date = models.DateField(blank=True, null=True)
    city = models.CharField(max_length=20,null=True)
    address = models.CharField(max_length=20, null=True)
    sign_near_the_house = models.CharField(max_length=20,null=True)
    # def __str__(self):
    #     return self.username