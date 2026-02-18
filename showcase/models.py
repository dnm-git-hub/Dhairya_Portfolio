from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50, choices=[
        ('Backend', 'Backend'),
        ('Data', 'Data Science'),
        ('Tools', 'Tools')
    ])

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200) # e.g. "Django, Pandas, SQL"
    image = models.ImageField(upload_to='project_images/')
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    METHOD_CHOICES = [
        ('Email', 'Email'),
        ('Call/WhatsApp', 'Call/WhatsApp'),
        ('LinkedIn', 'LinkedIn'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_method = models.CharField(max_length=20, choices=METHOD_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.contact_method} ({self.created_at.strftime('%Y-%m-%d')})"
