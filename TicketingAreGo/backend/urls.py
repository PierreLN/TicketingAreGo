from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('ticket/', views.getTickets, name='tickets'),
    path('ticket/<str:pk>/', views.getTicket, name='ticket')
]