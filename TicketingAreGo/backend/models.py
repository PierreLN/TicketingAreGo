from django.db import models

# Create your models here.

class Ticket(models.Model):

    STATUS_CHOICES = [
    ('open', 'Open'),
    ('in_progress', 'In Progress'),
    ('closed', 'Closed'),
    ]

    CATEGORY_CHOICES = [
    ('guess', 'Guess'),
    ('customer', 'Client'),
    ('media', 'Media'),
    ('staff', 'Staff')
    ]

    PURCHASE_CHOICES = [
    ('cash', 'Cash'),
    ('creditCard', 'Credit Card'),
    ('paypal', 'PayPal'),
    ]

    title = models.CharField(max_length=50, blank=False, null=False)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES) 
    description = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    purchase_from = models.CharField(max_length=20, choices=PURCHASE_CHOICES, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Title: {self.title}, Status: {self.status}, Category: {self.category}"