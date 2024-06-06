from django.shortcuts import render
from .models import Review
from .serializers import ReviewSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    

@api_view(['Get'])
def reviewsProduct(request,product_id):
    reviews = Review.objects.filter(product=product_id)
    review_ser = ReviewSerializer(reviews,many=True)
    return Response(review_ser.data)


@api_view(['Get'])
def reviewsUser(request,user_id):
    reviews = Review.objects.filter(user=user_id)
    review_ser = ReviewSerializer(reviews,many=True)
    return Response(review_ser.data)
