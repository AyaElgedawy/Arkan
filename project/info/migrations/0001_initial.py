# Generated by Django 5.0.4 on 2024-05-08 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Information',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=11)),
                ('whatsapp', models.CharField(max_length=11)),
                ('logo', models.ImageField(upload_to='')),
                ('location', models.CharField(max_length=300)),
                ('email', models.EmailField(max_length=254)),
                ('shipping_price', models.DecimalField(decimal_places=5, max_digits=5)),
                ('free_returns_duration', models.IntegerField()),
                ('fast_delivery_price', models.DecimalField(decimal_places=5, max_digits=5)),
            ],
        ),
    ]
