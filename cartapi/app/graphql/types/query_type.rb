module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :items, [Types::ItemType], 
    null: false,
    description: "Return a list of items"

    field :categories, [Types::CategoryType], 
    null: false,
    description: "Return a list of categories"

    def categories
      Category.all
    end
    def items
      Item.all
    end
    
  end
end
