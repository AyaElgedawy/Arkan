
from django.db import models
from categories.models import Category
from django.utils.safestring import mark_safe

class Size(models.Model):
    SIZES = [
        ('42', '42'),
        ('44', '44'),
        ('46', '46'),
        ('48', '48'),
        ('50', '50'),
        ('52', '52'),
        ('54', '54'),
        ('56', '56'),
        ('58', '58'),
        ('60', '60'),
        ('62', '62'),
        ('64', '64'),
        ('66', '66'),
        ('68', '68'),
        ('70', '70'),

    ]
    name = models.CharField(max_length=50, choices=SIZES)
    def __str__(self):
        return self.name

class Color(models.Model):
    
    name = models.CharField(max_length=50)
    code = models.CharField(max_length = 20, blank=True)
    def __str__(self):
        return self.name
    def color_tag(self):
        if self.code is not None:
            return mark_safe('<p style = "background-color:{}">Color</p>'.format(self.code))
class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    last_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    current_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    quantity = models.PositiveIntegerField( null=True)
    sizes = models.ManyToManyField(Size, related_name='products', blank=True)
    colors = models.ManyToManyField(Color, related_name='products', blank=True)
    description = models.TextField()
    image1=models.ImageField(null=True,blank=True)   
    image2=models.ImageField(null=True,blank=True)    
    image3=models.ImageField(null=True,blank=True)    
    image4=models.ImageField(null=True,blank=True)    
    image5=models.ImageField(null=True,blank=True)
    
    def __str__(self):
        return self.name


class ProductVariant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="variants")
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)  # Inventory count for this combination

    def __str__(self):
        return f"{self.product.name} - {self.color.name} - {self.size.name}"