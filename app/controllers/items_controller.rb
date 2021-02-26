class ItemsController < ApplicationController
  before_action :set_item
  def index
    @items = Department.find(params[:id]).items
    render component: "Items", props: {department: @department, items: @items}
  end

  def show
    @item = Item.find(params[:id])
    render component: "Item", props: {item: @item}


  end

  def new
    @item = Item.new

    render component: "NewItem", props: {item: @item}

  end

  def edit
  end

  def create
    @item = @department.item.new(item_params)
    if @item.save
      redirect_to [@department, @topic]
    end
  end


  private

  def set_department
    @department = Department.find(params{department.id})
   
  end

  def set_item
    # @item = Item.find(params[:id])
  end 

  def item_params
    params.require(:item).permit(:name, :body)
  end 


end
