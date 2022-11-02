class NamesController < ApplicationController
  def index
    render json: { items: Name.order(created_at: :desc) }, status: :ok
  end

  def generate
    render json: { name: random_name }, status: :ok
  end

  def create
    name = Name.new(name_params)
    if name.save
      render json: { name: }, status: :ok
    else
      render json: { error: 'Name must be unique' }, status: :unprocessable_entity
    end
  end

  private

  def name_params
    params.require(:name).permit(:name)
  end

  def random_name
    all_names = Name.all
    "#{all_names.sample.first_name} #{all_names.sample.last_name}"
  end
end
