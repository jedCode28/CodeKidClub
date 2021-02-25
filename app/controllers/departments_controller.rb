class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :edit, :destroy]
  def index
    @departments = Department.all

    render component: 'Departments', props: {departments: @departments}

  end

  def show
    @department = Department.find(params[:id])
    
    render component: "Department", props: {department: @department}
  end

  def new
  end

  def edit
  end

  private 

  def set_department
    @department = Department.find(params[:id])
  end 

  def department_params
    params.require(:department).permit(:name, :body)
  end 


end
