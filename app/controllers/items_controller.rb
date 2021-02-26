class ItemsController < ApplicationController
  before_action :set_item
  def index
    @items = Department.find(params[:id]).items
    render component: "Items", props: {department: @department, items: @items}
  end

  def show
  end

  def new
  end

  def edit
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end 

  def item_params
    params.require(:id).permit(:name, :body)
  end 


end
