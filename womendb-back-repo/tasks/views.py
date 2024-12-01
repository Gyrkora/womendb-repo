from rest_framework import viewsets
from .serializer import TaskSerializer, CategorySerializer, WomanSerializer
from .models import Task, Category, Woman

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class WomanViewSet(viewsets.ModelViewSet):
    # queryset = Woman.objects.all()
    serializer_class = WomanSerializer

    def get_queryset(self):
        """
        Optionally filters the returned women by a 'category' query parameter in the URL.
        """
        queryset = Woman.objects.all()
        category_id = self.request.query_params.get('category', None)
        if category_id is not None:
            queryset = queryset.filter(category__id=category_id)
        return queryset