class DepartmentsController < ApplicationController
<<<<<<< HEAD
  #before_action :set_department, only: [:show, :update, :edit, :destroy]
=======
  # before_action :set_department, only: [:show, :update, :edit, :destroy]
>>>>>>> c6ecc709d08e0e2e6357632ced58faaee2b58f86
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
end
