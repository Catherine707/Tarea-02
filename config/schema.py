import graphene
import biblioteca.schema

class Query(biblioteca.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)