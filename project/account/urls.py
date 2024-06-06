from django.urls import path
# from .views import register, login
from .views import UserView, allUsers, register_user, user_login, user_logout

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('user/', UserView.as_view(),name='loggedinUser'),
    path('logout/', user_logout, name='logout'),
    path('allUsers/', allUsers, name='allUsers'),

]