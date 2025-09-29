from django.shortcuts import render, redirect
from .models import Todo


def home(request):
    if request.method == 'POST':
        task = request.POST.get('task')
        if task:
            Todo.objects.create(task=task)
        return redirect('home')
    todos = Todo.objects.all()
    return render(request, 'home/home.html', {'todos': todos})
