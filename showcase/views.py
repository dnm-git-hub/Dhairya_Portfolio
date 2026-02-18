from django.shortcuts import render, redirect
from django.contrib import messages # Import for success notifications
from .models import Skill, Project, ContactMessage

def home(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        method = request.POST.get('contact_method')
        
        # 1. Save to Database for your Admin tracking
        ContactMessage.objects.create(name=name, email=email, contact_method=method)
        
        # 2. Prepare the response message based on their choice
        if method == "LinkedIn":
            msg = "Profile: www.linkedin.com/in/dhairya-maisheri-5a9131219"
        elif method == "Call/WhatsApp":
            msg = "Contact Number: +91 8169269593"
        else:
            msg = "Email ID: dnm091298@gmail.com"

        messages.success(request, f"Thank you, {name}! {msg}")
        return redirect('home') # Safely reloads the home page

    # Existing context logic
    skills = Skill.objects.all()
    projects = Project.objects.all().order_by('-created_at')
    return render(request, 'showcase/home.html', {'skills': skills, 'projects': projects})