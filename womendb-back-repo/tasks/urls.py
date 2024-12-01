from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import CategoryViewSet, WomanViewSet, TaskView



router = routers.DefaultRouter()
router.register(r'tasks',  TaskView, 'tasks')
router.register(r'categories', CategoryViewSet, 'categories')
router.register(r'women', WomanViewSet, 'women')


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Tasks API"))
]