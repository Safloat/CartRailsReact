class Mutations::UpdatePrice < Mutations::BaseMutation
    null true


    argument :id, ID
    argument :price, ID
    field :item, Types::ItemType

    def resolve(**params)
      # binding.break
      Item.find_by(id: params[:id]).update(price: params[:price])
      Item.find_by(id: params[:id])
    end
end