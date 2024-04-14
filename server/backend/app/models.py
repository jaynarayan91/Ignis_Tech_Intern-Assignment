from django.db import models

# Create your models here.
class Event(models.Model):
    event_name = models.SlugField(max_length=255, unique=True, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    location = models.SlugField(max_length=255, null=True, blank=True)
    event_date = models.DateField(auto_now_add=True)
    event_time = models.TimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    is_liked = models.DecimalField(default=0, max_digits=11, decimal_places=2)

    def __str__(self):
        return self.event_name