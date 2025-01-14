from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Cart
from .serializers import CartSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

class CartListCreateView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class CartRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    