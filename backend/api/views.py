
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import getTasklist,getTaskDetail,createTask,taskUpdate,taskDelete

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def taskList(request):

     if request.method == 'GET':
          return getTasklist(request)
     
     if request.method == 'POST':
          return createTask(request)



@api_view(['GET', 'DELETE', 'PUT'])
def taskDetail(request, pk):

     if request.method == 'GET':
          return getTaskDetail(request, pk)
     
     if request.method == 'PUT':
          return taskUpdate(request,pk)
     
     if request.method == 'DELETE':
          return taskDelete(request, pk)



