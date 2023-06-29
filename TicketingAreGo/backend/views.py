from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Ticket
from .serializers import TicketSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/tickets/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of tickets'
        },
        {
            'Endpoint': '/tickets/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single ticket object'
        },
        {
            'Endpoint': '/tickets/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new ticket with data sent in post request'
        },
        {
            'Endpoint': '/tickets/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing ticket with data sent in post request'
        },
        {
            'Endpoint': '/tickets/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting ticket'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getTickets(request):
    tickets = Ticket.objects.all()
    serializer = TicketSerializer(tickets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTicket(request, pk):
    tikect = Ticket.objects.get(id=pk)
    serializer = TicketSerializer(ticket, many=False)
    return Response(serializer.data)