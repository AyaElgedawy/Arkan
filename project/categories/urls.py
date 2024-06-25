from django.urls import path

from .views import CategoryListCreateView,CategoryList, CategoryRetrieveUpdateDestroyView

urlpatterns = [
    path('categories', CategoryList.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail'),
]