from django.db import models
from account.models import CustomUser
from products.models import Product ,Size ,Color ,ProductVariant

class Cart(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)  
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=True)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=True)
    current_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)  # Add this line
    product_variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE,null=True)
    # items = models.PositiveIntegerField()
    # shipping = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name} - {self.quantity}"

    def save(self, *args, **kwargs):
        # Ensure current_price is set when the cart item is created
        if not self.current_price:
            self.current_price = self.product.current_price
        super().save(*args, **kwargs)