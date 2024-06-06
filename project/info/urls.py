from django.urls import path

from .views import InformationListCreateView, InformationRetrieveUpdateDestroyView

urlpatterns = [
    path('categories/', InformationListCreateView.as_view(), name='Information-list-create'),
    path('categories/<int:pk>/', InformationRetrieveUpdateDestroyView.as_view(), name='Information-detail'),
]