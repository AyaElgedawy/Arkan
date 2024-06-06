from django.urls import path

from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView ,ImageListCreateView, ImageRetrieveUpdateDestroyView, productsCategory

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path('productsCategory/<category_id>/', productsCategory, name='products_of_category'),

    path('images/', ImageListCreateView.as_view(), name='image-list-create'),
    path('images/<int:pk>/', ImageRetrieveUpdateDestroyView.as_view(), name='image-detail'),
]