# Generated by Django 4.2.7 on 2024-05-07 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_woman_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='bgImage',
            field=models.TextField(default='https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/23/20/pg-38-rosie-riveter-1.jpg?width=1200'),
        ),
    ]
