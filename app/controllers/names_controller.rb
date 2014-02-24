class NamesController < ApplicationController
  def index
    @name = Name.new
  end

  def generate
    @generated_name = "#{random_name} #{random_name}"
  end

  def random
    @random_name = Name.order("RANDOM()").first
  end

  def create
    @name = Name.new(name_params)
    render :failed unless @name.save
  end

  def refresh
  end

  private
  def name_params
    params.require(:name).permit(:name)
  end

  def random_name
    @names.map{|name| name.name.split(' ')}.flatten.sample.capitalize
  end
end
