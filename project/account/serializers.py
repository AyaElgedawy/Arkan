from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password','phone_number','city','address','sign_near_the_house']
        extra_kwargs = {'password': {'write_only': True},
                        'phone_number': {'required': False},
                        'city': {'required': False},
                        'address': {'required': False},
                        'sign_near_the_house': {'required': False},}
    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("هذا الاسم مستخدم بالفعل، جرب اسم مختلف!")
        return value
    
    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data.get('phone_number'),
            city=validated_data.get('city'),
            address=validated_data.get('address'),
            sign_near_the_house=validated_data.get('sign_near_the_house'),

        )
        user.set_password(validated_data['password'])
        user.save()
        return user

