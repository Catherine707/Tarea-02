from django.db import migrations

def seed_data(apps, schema_editor):
    Autor = apps.get_model('biblioteca', 'Autor')
    Libro = apps.get_model('biblioteca', 'Libro')

    autor1, _ = Autor.objects.get_or_create(
        nombre="Gabriel Garcia Marquez",
        defaults={
            "nacionalidad": "Colombiana",
            "edad": 87,
            "activo": False
        }
    )

    autor2, _ = Autor.objects.get_or_create(
        nombre="Isabel Allende",
        defaults={
            "nacionalidad": "Chilena",
            "edad": 82,
            "activo": True
        }
    )

    Libro.objects.get_or_create(
        titulo="Cien anos de soledad",
        defaults={
            "genero": "Realismo magico",
            "anio_publicacion": 1967,
            "disponible": True,
            "autor": autor1
        }
    )

    Libro.objects.get_or_create(
        titulo="La casa de los espiritus",
        defaults={
            "genero": "Novela",
            "anio_publicacion": 1982,
            "disponible": True,
            "autor": autor2
        }
    )

def unseed_data(apps, schema_editor):
    Autor = apps.get_model('biblioteca', 'Autor')
    Libro = apps.get_model('biblioteca', 'Libro')

    Libro.objects.filter(titulo="Cien anos de soledad").delete()
    Libro.objects.filter(titulo="La casa de los espiritus").delete()
    Autor.objects.filter(nombre="Gabriel Garcia Marquez").delete()
    Autor.objects.filter(nombre="Isabel Allende").delete()

class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_data, unseed_data),
    ]