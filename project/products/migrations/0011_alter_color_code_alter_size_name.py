# Generated by Django 5.0.4 on 2024-06-27 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_remove_color_hex_code_color_code_alter_size_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='color',
            name='code',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='size',
            name='name',
            field=models.CharField(choices=[('42', '42'), ('44', '44'), ('46', '46'), ('48', '48'), ('50', '50'), ('52', '52'), ('54', '54'), ('56', '56'), ('58', '58'), ('60', '60'), ('62', '62'), ('64', '64'), ('66', '66'), ('68', '68'), ('70', '70')], max_length=50),
        ),
    ]
