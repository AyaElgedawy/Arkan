from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Cart
from .serializers import CartSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

    # queryset = Cart.objects.all()
class CartListCreateView(generics.ListCreateAPIView):
    serializer_class = CartSerializer

    def get_queryset(self):
        user = self.request.user
        user_id = self.request.query_params.get("user_id")
        if user_id:
            # لو عامل تسجيل دخول: رجعي الكارت بتاعه
            return Cart.objects.filter(user=user_id).order_by('-id')
        else:
            # لو مش عامل تسجيل دخول: ترجعي كل الكارت (او تقدري ترجعي فاضي حسب ما تحبي)
            return Cart.objects.all()  # أو تقدري تعملي حاجه مختلفه حسب حالتك

    def perform_create(self, serializer):
        user = self.request.user
        if user.is_authenticated:
            # لو اليوزر عامل تسجيل دخول، اربطي الكارت بيه
            serializer.save(user=user)
        else:
            # لو مش عامل تسجيل دخول، سيبي الكارت من غير يوزر
            serializer.save()

class CartRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CartSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Cart.objects.filter(user=user).order_by('-id')
        else:
            # لو مش عامل تسجيل دخول: ترجعي كل الكارت (او تقدري ترجعي فاضي حسب ما تحبي)
            return Cart.objects.all()  # أو تقدري تعملي حاجه مختلفه حسب حالتك
