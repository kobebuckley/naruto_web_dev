from django.http import HttpResponse

def index(request):
    return HttpResponse("Django has been connected!")





from django.urls import path
from . import views

# urlpatterns = [
#     path('my-view/', views.my_view, name='my-view'),
# ]
from django.shortcuts import render
import csv

def my_view(request):
    with open('../archive/characters.csv', newline='') as csvfile:
        reader = csv.reader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    

    index = len(data) # finding how many of data we have
    print("the index is: " + str(index))


    test_char_columns = data[0:26] # each number after 0 represents the data for each person


    # for element in data:
    #     print(element)

    
    
    context = {'test_char_columns': test_char_columns, 'index': index}
    return render(request, '../templates/my_template.html', context)