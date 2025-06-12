from rest_framework import viewsets
from .serializer import TaskSerializer, CategorySerializer, WomanSerializer
from .models import Task, Category, Woman
from django.views.generic import TemplateView
from django.http import HttpResponseNotFound
from pathlib import Path
from django.conf import settings


# Create your views here.

class TaskView(viewsets.ReadOnlyModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class WomanViewSet(viewsets.ReadOnlyModelViewSet):
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
    



class FrontendAppView(TemplateView):
    template_name = "index.html"  # Serve the index.html

    def get(self, request, *args, **kwargs):
        if settings.DEBUG:
            print("DEBUG is True")
            print("STATICFILES_DIRS:", settings.STATICFILES_DIRS)
            index_file = Path(settings.STATICFILES_DIRS[0]) / "index.html"
            print("Looking for index.html at:", index_file)
        else:
            index_file = Path(settings.STATIC_ROOT) / "dist" / "index.html"

        # Check if the file exists
        if not index_file.exists():
            print("index.html not found at:", index_file)
            return HttpResponseNotFound("Frontend build not found. Please build your frontend and run collectstatic.")
        
        return super().get(request, *args, **kwargs)



 
