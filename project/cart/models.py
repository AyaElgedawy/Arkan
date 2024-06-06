from django.db import models
from products.models import Product

class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    items = models.PositiveIntegerField()
    # shipping = models.ForeignKey(User, on_delete=models.CASCADE)