from django.db import models

# Create your models here.
class Information(models.Model):
  
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=11)
    whatsapp = models.CharField(max_length=11)
    logo = models.ImageField()
    location = models.CharField(max_length = 300)
    email = models.EmailField()
    shipping_price = models.DecimalField(max_digits = 5,decimal_places=5)
    free_returns_duration = models.IntegerField()
    fast_delivery_price = models.DecimalField(max_digits = 5,decimal_places=5)