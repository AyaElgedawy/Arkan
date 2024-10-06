# Generated by Django 5.0.4 on 2024-10-06 18:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0003_alter_cart_quantity'),
        ('products', '0013_remove_product_color'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='color',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.color'),
        ),
        migrations.AddField(
            model_name='cart',
            name='size',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.size'),
        ),
    ]
