from django.shortcuts import render
from rest_framework import response
from rest_framework.decorators import api_view
from .models import Event
from .serializers import EventSerializer
from django.db.models import Q

# Create your views here.
@api_view(['GET', 'POST', 'PUT'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/events/',
            'method': 'GET',
            "body": None,
            'description': 'Returns an array of events.'
        },
        {
            'Endpoint': '/events/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single event object.'
        },
        {
            'Endpoint': '/events/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates a new event with data sent in post request.'
        },
        {
            'Endpoint': '/events/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates an existing event with data sent in post request.'
        },
    ]
    return response.Response(routes)

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all().order_by('-id')
    serializer = EventSerializer(events, many=True)
    return response.Response(serializer.data)

@api_view(['GET'])
def getEvent(request, pk):
    try:
        if pk.isdigit():  # Check if pk is an integer
            events = Event.objects.get(id=pk)
        else:
            events = Event.objects.get(event_name=pk)  # Assuming 'event_name' is a unique field
        # events = Event.objects.get(Q(id=pk) | Q(event_name__icontains=pk))
        # events = Event.objects.get(Q(slug=pk) | Q(id=pk))
        serializer = EventSerializer(events, many=False)
        return response.Response(serializer.data)
    except Event.DoesNotExist:
        return response.Response({"message": "Event not found"}, status=404)

@api_view(['PUT'])
def updateEvent(request, pk):
    data = request.data
    event = Event.objects.get(event_name=pk)
    serializer = EventSerializer(instance=event, data=data)

    if serializer.is_valid():
        serializer.save()

    return response.Response(serializer.data)