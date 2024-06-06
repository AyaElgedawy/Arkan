from django.urls import path

from .views import ReviewListCreateView, ReviewRetrieveUpdateDestroyView ,reviewsProduct , reviewsUser

urlpatterns = [
    path('reviews/', ReviewListCreateView.as_view(), name='review-list-create'),
    path('reviews/<int:pk>/', ReviewRetrieveUpdateDestroyView.as_view(), name='review-detail'),
    path('reviewsProduct/<product_id>/', reviewsProduct, name='reviews_of_category'),
    path('reviewsUser/<user_id>/', reviewsUser, name='reviews_of_user'),

    
]