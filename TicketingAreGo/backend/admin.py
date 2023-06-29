from django.contrib import admin
from .models import Ticket
# Register your models here.

class TicketAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'category', 'purchase_from', 'created_at')

admin.site.register(Ticket, TicketAdmin)
