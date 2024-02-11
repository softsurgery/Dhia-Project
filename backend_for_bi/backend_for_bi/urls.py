
from django.contrib import admin
from django.urls import path
from .views import SumAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sum/', SumAPIView.as_view(), name='sum-api'),
]