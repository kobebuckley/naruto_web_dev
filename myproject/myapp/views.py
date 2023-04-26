from django.http import HttpResponse

def index(request):
    return HttpResponse("Django has been connected!")
