# Generated by Django 5.0.2 on 2024-02-18 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_target_task_body_remove_task_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='completed',
        ),
    ]
