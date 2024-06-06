from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password','phone_number','birth_date','city','address','sign_near_the_house']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data.get['phone_number'],
            # birth_date=validated_data['birth_date'],
            city=validated_data['city'],
            # address=validated_data['address'],
            # sign_near_the_house=validated_data['sign_near_the_house'],

        )
        user.set_password(validated_data['password'])
        user.save()
        return user