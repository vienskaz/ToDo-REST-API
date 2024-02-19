from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


def getTasklist(request):
    tasks=Task.objects.all().order_by('-updated')
    serializer=TaskSerializer(tasks, many=True)
    return Response(serializer.data)

def getTaskDetail(request, pk):
    tasks=Task.objects.get(id=pk)
    serializer=TaskSerializer(tasks, many=False)
    return Response(serializer.data)

def createTask(request):
    serializer=TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


def taskUpdate(request, pk):
     data=request.data
     task=Task.objects.get(id=pk)
     serializer=TaskSerializer(instance=task, data=data)

     if serializer.is_valid():
         serializer.save()
         print("data:", data)
     return Response(serializer.data)


def taskDelete(request, pk):
    task=Task.objects.get(id=pk)
    task.delete()
    return Response("Deleted")

