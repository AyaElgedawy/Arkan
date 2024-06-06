from django.db import models
from account.models import CustomUser
from products.models import Product
# Create your models here.
# user-->FK
#   review
#   comment 
#   date-->auto  

class Review(models.Model):
    user = models.ForeignKey(CustomUser,on_delete = models.CASCADE, related_name="reviews")
    product = models.ForeignKey(Product,on_delete=models.CASCADE, related_name = "reviews")
    review = models.IntegerField()
    comment = models.TextField(max_length = 20000)
    date = models.DateTimeField(auto_now_add = True)