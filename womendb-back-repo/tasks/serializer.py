
# serializando los datos de orm a base de dato normal

from rest_framework import serializers
from .models import Task, Category, Woman

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'bgImage']

class WomanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Woman
        fields = ['id', 'name', 'description', 'country', 'category', 'image']