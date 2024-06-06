from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Information
from .serializers import InformationSerializer

class InformationListCreateView(generics.ListCreateAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer

class InformationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer