# Generated by Django 4.1.4 on 2023-02-02 11:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app_annance', '0002_alter_photo_idannance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='idAnnance',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='annonce_imgs', to='app_annance.annance'),
        ),
    ]