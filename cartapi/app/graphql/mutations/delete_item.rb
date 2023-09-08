class Mutations::DeleteItem < Mutations::BaseMutation
    null true


    argument :id, ID
    field :item, Types::ItemType

    def resolve(**params)
      # binding.break
      Item.find_by(id: params[:id]).delete
    end
end