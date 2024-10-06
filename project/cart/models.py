from django.db import models
from products.models import Product ,Size ,Color

class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=True)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=True)
    # items = models.PositiveIntegerField()
    # shipping = models.ForeignKey(User, on_delete=models.CASCADE)