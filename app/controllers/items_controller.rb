class ItemsController < ApplicationController
  def index
  end

  def show
    @item = Item.find(params[:id])
    render component: "Item", props: {item: @item}


  end

  def new
  end

  def edit
  end
end
