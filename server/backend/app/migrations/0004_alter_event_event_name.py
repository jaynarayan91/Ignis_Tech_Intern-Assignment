# Generated by Django 4.2.4 on 2023-08-14 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_event_event_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_name',
            field=models.SlugField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
