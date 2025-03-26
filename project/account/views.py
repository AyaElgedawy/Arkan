from django.shortcuts import redirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import CustomUser

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from jwt.exceptions import ExpiredSignatureError, DecodeError

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        if '@' in username:
            try:
                user = CustomUser.objects.filter(email=username).first()
            except ObjectDoesNotExist:
                pass
        else:
            # Otherwise, consider it as a username
            try:
                user = CustomUser.objects.filter(username=username).first()
            except CustomUser.DoesNotExist:
                pass
        serializer = UserSerializer(user)

        if user is None:
            raise AuthenticationFailed('User not found!')
        else:
            print("<<<<<<<<<<<<<<<")
            print(user.username)
            print("<<<<<<<<<<<<<<<")
            if not user.check_password(password):
                raise AuthenticationFailed('Incorrect password!')

            # if not user.email_verified:
            #     raise AuthenticationFailed('Email not verified! Please verify your email.')
        
            user = authenticate(username=user.username, password=password)
            
            payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
            }
            token = jwt.encode(payload, 'secret', algorithm='HS256')
            response = Response()

            response.set_cookie(key='jwt', value=token, httponly=True)
            response.data = {
                'jwt': token
                
            }
            response.data['user'] = serializer.data
        
            return response
        
class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        except DecodeError:
            raise AuthenticationFailed('Invalid token!')

        user = CustomUser.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)
    def post(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        except DecodeError:
            raise AuthenticationFailed('Invalid token!')

        user = CustomUser.objects.filter(id=payload['id']).first() 
        user_ser = UserSerializer(data=request.data,instance=user,partial=True)
        if user_ser.is_valid():
            user_ser.save()
            return redirect('loggedinUser')
        else:
            return Response(user_ser.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        except DecodeError:
            raise AuthenticationFailed('Invalid token!')

        user = CustomUser.objects.filter(id=payload['id']).first()
        user.delete()
        return Response('the user deleted successfully') 


@api_view(['POST'])
def user_logout(request):
    if request.method == 'POST':
       try: 
            response = Response()
            response.delete_cookie('jwt')
            response.data = {
                'message': 'success'
            }
            return response
       except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
       
from rest_framework.decorators import api_view
from rest_framework.response import Response
    
@api_view(['Get'])
def allUsers(request):
    all_Users = CustomUser.objects.all()
    User_ser = UserSerializer(all_Users,many=True)
    return Response(User_ser.data)


