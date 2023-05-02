from django.http import HttpResponse

def index(request):
    return HttpResponse("Django has been connected!")

# import socketio
# sio = socketio.Server(async_mode='threading')


# @sio.on('connect')
# def connect(sid, environ):
#     print('Connected:', sid)

# @sio.on('disconnect')
# def disconnect(sid):
#     print('Disconnected:', sid)

# def my_view(request):
#     ...
#     return sio_manage(request, {'': index})












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
    

    # index = len(data) # finding how many of data we have
    # print("the index is: " + str(index))


    # default_data = data[0:26] # each number after 0 represents the data for each person

    default_data = data[0]
    tanjiro_kamado = data[1]
    zenitsu_agatsuma = data[2]
    inosuke_hashibira = data[3]
    kanao_tsuyuri = data[4]
    genya_shinazugawa = data[5]
    
    murata = data[6]
    ozaki = data[7]
    nezuko_kamado = data[8]
    muzan_kibutsuji = data[9]
    kokushibo = data[10]
    doma = data[11]
    akaza = data[12]
    nakime = data[13]
    hantengu = data[14]
    gyokko = data[15]
    gyutaro = data[16]
    daki = data[17]
    kaigaku = data[18]
    enmu = data[19]

    rokuro = data[20]
    wakuraba = data[21]
    mukago = data[22]
    rui = data[23]
    kamanue = data[24]
    kyogai = data[25]



    # first_char_data = data[1]
    # last_char_data = data[25]

    # for element in data:
    #     print(element)

    
    
    context = {

        'default_data': default_data,
        'tanjiro_kamado': tanjiro_kamado,
        'zenitsu_agatsuma': zenitsu_agatsuma,
        'inosuke_hashibira' : inosuke_hashibira,
        'kanao_tsuyuri': kanao_tsuyuri,
        'genya_shinazugawa' : genya_shinazugawa,
        'murata' : murata,
        'ozaki' :ozaki,
        'nezuko_kamado' : nezuko_kamado,
        'muzan_kibutsuji' : muzan_kibutsuji,
        'kokushibo' : kokushibo,
        'doma' : doma,
        'akaza' : akaza,
        'nakime': nakime,
        'hantengu': hantengu,
        'gyokko': gyokko,
        'gyutaro' : gyutaro,
        'daki' : daki,
        'kaigaku': kaigaku,
        'rokuro' : rokuro,
        'enmu': enmu,
        'wakuraba' : wakuraba,
        'mukago': mukago,
        'rui' : rui,
        'kamanue': kamanue,
        'kyogai' : kyogai,
        }
    return render(request, '../templates/my_template.html', context)