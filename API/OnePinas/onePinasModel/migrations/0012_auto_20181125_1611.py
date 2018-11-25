# Generated by Django 2.1.3 on 2018-11-25 08:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onePinasModel', '0011_auto_20181125_1338'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='account_type',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 25, 16, 11, 58, 264671)),
        ),
        migrations.AlterField(
            model_name='account',
            name='is_deleted',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='status',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 25, 16, 11, 58, 265571)),
        ),
        migrations.AlterField(
            model_name='message',
            name='time_received',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 25, 16, 11, 58, 268868)),
        ),
    ]