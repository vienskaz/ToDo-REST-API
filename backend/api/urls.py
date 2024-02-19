from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('tasks/', views.taskList, name="task-list"),
    path('tasks/<str:pk>/', views.taskDetail, name="task-detail")

]
