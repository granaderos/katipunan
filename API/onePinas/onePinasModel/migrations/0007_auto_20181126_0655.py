# Generated by Django 2.1.3 on 2018-11-26 06:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onePinasModel', '0006_auto_20181126_0641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 26, 6, 55, 5, 394831)),
        ),
        migrations.AlterField(
            model_name='job',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 26, 6, 55, 5, 396294)),
        ),
        migrations.AlterField(
            model_name='message',
            name='time_received',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 26, 6, 55, 5, 400115)),
        ),
    ]
