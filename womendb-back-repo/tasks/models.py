from django.db import models

# Create your models here.

class Task (models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank = True)
    done = models.BooleanField(default = False)

   
    def __str__(self):
        return f"{self.title} - {self.description}" if self.description else self.title

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    bgImage = models.TextField(default='https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/23/20/pg-38-rosie-riveter-1.jpg?width=1200')

    def __str__(self):
        return self.name

class Woman(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    country = models.CharField(max_length=100)
    category = models.ForeignKey(Category, related_name='women', on_delete=models.CASCADE)
    image = models.TextField(default='https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/23/20/pg-38-rosie-riveter-1.jpg?width=1200')

    def __str__(self):
        return f"{self.name} ({self.category.name})"