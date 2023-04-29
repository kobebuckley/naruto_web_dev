# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.index, name='index'),
# ]
from django.urls import path
from . import views

urlpatterns = [
    path('my-view/', views.my_view, name='my-view'), path('', views.index, name='index')
]
