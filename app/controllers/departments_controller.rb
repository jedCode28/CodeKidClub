class DepartmentsController < ApplicationController
  def index
    @departments = Department.all

    render compnent: 'Departments', props: {departments: @departments}

  end

  def show
  end

  def new
  end

  def edit
  end
end
