import graphene
from graphene_django import DjangoObjectType
from .models import Autor, Libro

class AutorType(DjangoObjectType):
    class Meta:
        model = Autor
        fields = "__all__"

class LibroType(DjangoObjectType):
    class Meta:
        model = Libro
        fields = "__all__"

class Query(graphene.ObjectType):
    all_autores = graphene.List(AutorType)
    autor_by_id = graphene.Field(AutorType, id=graphene.Int(required=True))

    all_libros = graphene.List(LibroType)
    libro_by_id = graphene.Field(LibroType, id=graphene.Int(required=True))

    def resolve_all_autores(root, info):
        return Autor.objects.all()

    def resolve_autor_by_id(root, info, id):
        return Autor.objects.get(id=id)

    def resolve_all_libros(root, info):
        return Libro.objects.select_related('autor').all()

    def resolve_libro_by_id(root, info, id):
        return Libro.objects.select_related('autor').get(id=id)