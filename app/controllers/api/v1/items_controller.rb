class Api::V1::ItemsController < Api::V1::BaseController 
	def index 
		respond_with Item.all,
		json: Item.all.order("created_at DESC")
	end 
	def create 
		respond_with :api, :v1, Item.create(item_params), json: Item.create(item_params)
	end 
	def destroy 
		if Item.destroy(params[:id])
        head :no_content, status: :ok
        else
        render json: @idea.errors, status: :unprocessable_entity
        end

	end 
	def update 
		@item = Item.find(params["id"]) 
		@item.update_attributes(item_params) 

		respond_with @item, json: @item 
	end 
	private 
	def item_params 
		params.require(:item).permit(:id, :name, :description) 
	end 
end
