class DepartmentsController < ApplicationController
  before_action :set_sub, only: [:show, :update, :edit, :destroy]
  def index
    @departments = Department.all

    render component: 'Departments', props: {departments: @departments}

  end

  def show
    @departnment = Department.find(params[:id])

  end

  def new
  end

  def edit
  end
end
