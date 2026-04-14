from django.db import migrations

def update_second_book(apps, schema_editor):
    Autor = apps.get_model('biblioteca', 'Autor')
    Libro = apps.get_model('biblioteca', 'Libro')

    Libro.objects.filter(titulo="La casa de los espiritus").delete()
    Autor.objects.filter(nombre="Isabel Allende").delete()

    autor2, _ = Autor.objects.get_or_create(
        nombre="Osamu Dazai",
        defaults={
            "nacionalidad": "Japonesa",
            "edad": 38,
            "activo": False
        }
    )

    Libro.objects.get_or_create(
        titulo="Indigno de ser humano",
        defaults={
            "genero": "Novela",
            "anio_publicacion": 1948,
            "disponible": True,
            "autor": autor2
        }
    )

def reverse_update_second_book(apps, schema_editor):
    Autor = apps.get_model('biblioteca', 'Autor')
    Libro = apps.get_model('biblioteca', 'Libro')

    Libro.objects.filter(titulo="Indigno de ser humano").delete()
    Autor.objects.filter(nombre="Osamu Dazai").delete()

    autor2, _ = Autor.objects.get_or_create(
        nombre="Isabel Allende",
        defaults={
            "nacionalidad": "Chilena",
            "edad": 82,
            "activo": True
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

class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0002_seed_data'),
    ]

    operations = [
        migrations.RunPython(update_second_book, reverse_update_second_book),
    ]