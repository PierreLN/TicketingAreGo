# Generated by Django 4.1.7 on 2023-06-29 14:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_ticket_purchase_from_alter_ticket_note'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticket',
            old_name='note',
            new_name='description',
        ),
    ]