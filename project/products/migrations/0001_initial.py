# Generated by Django 5.1.5 on 2025-01-15 13:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('code', models.CharField(blank=True, max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('42', '42'), ('44', '44'), ('46', '46'), ('48', '48'), ('50', '50'), ('52', '52'), ('54', '54'), ('56', '56'), ('58', '58'), ('60', '60'), ('62', '62'), ('64', '64'), ('66', '66'), ('68', '68'), ('70', '70')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('last_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('current_price', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('quantity', models.PositiveIntegerField(null=True)),
                ('description', models.TextField()),
                ('image1', models.ImageField(blank=True, null=True, upload_to='')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='')),
                ('image4', models.ImageField(blank=True, null=True, upload_to='')),
                ('image5', models.ImageField(blank=True, null=True, upload_to='')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.category')),
                ('colors', models.ManyToManyField(blank=True, related_name='products', to='products.color')),
                ('sizes', models.ManyToManyField(blank=True, related_name='products', to='products.size')),
            ],
        ),
        migrations.CreateModel(
            name='ProductVariant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=0)),
                ('color', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='products.color')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='products.product')),
                ('size', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='products.size')),
            ],
        ),
    ]
