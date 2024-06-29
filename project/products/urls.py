from django.urls import path

from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView, productsCategory, ColorsList, SizesList

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path('productsCategory/<category_id>/', productsCategory, name='products_of_category'),
    path('colors', ColorsList.as_view(), name='color-list'),
    path('sizes', SizesList.as_view(), name='size-list'),


    
]