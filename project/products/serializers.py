from rest_framework import serializers
from .models import Product,Color,Size,ProductVariant


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class ProductVariantSerializer(serializers.ModelSerializer):
    color = ColorSerializer()  
    size = SizeSerializer()   

    class Meta:
        model = ProductVariant
        fields = ['id', 'product', 'size', 'color', 'quantity']