# Generated by Django 5.1.5 on 2025-01-15 13:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_productvariant_color_alter_productvariant_size'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productvariant',
            name='size',
        ),
    ]
