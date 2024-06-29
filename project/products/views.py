from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Product,Color,Size
from .serializers import ProductSerializer, ColorSerializer, SizeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
@api_view(['Get'])
def productsCategory(request,category_id):
    products = Product.objects.filter(category=category_id)
    product_ser = ProductSerializer(products,many=True)
    return Response(product_ser.data)

class ColorsList(generics.ListAPIView):
    queryset=Color.objects.all()
    serializer_class=ColorSerializer

class SizesList(generics.ListAPIView):
    queryset=Size.objects.all()
    serializer_class=SizeSerializer