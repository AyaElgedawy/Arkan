
from django.db import models
from categories.models import Category

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    last_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    current_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    quantity = models.PositiveIntegerField( null=True)
    available_sizes = models.CharField(max_length=100, null=True)
    available_colors = models.CharField(max_length=100, null=True)
    description = models.TextField()
    image1=models.ImageField(null=True,blank=True)   
    image2=models.ImageField(null=True,blank=True)    
    image3=models.ImageField(null=True,blank=True)    
    image4=models.ImageField(null=True,blank=True)    
    image5=models.ImageField(null=True,blank=True)    
