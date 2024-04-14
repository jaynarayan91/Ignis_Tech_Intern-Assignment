from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.getRoutes),
    path('events/', views.getEvents),
    path('events/<str:pk>/update/', views.updateEvent),
    path('events/<str:pk>', views.getEvent),
]

