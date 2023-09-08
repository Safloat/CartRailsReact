class Mutations::CreateItem < Mutations::BaseMutation
    null true


    argument :title, String
    argument :price, ID
    argument :categoryid, ID
    field :item, Types::ItemType

    def resolve(**params)
      # binding.break
      category = Category.find(params[:categoryid])
      item = Item.create(title: params[:title],category: category,price: params[:price])
      item 
    end
end