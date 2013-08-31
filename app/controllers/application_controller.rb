class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_names

  def set_names
    @names = Name.all
    @first_names = Name.all.map(&:first_name)
    @last_names = Name.all.map(&:last_name)
  end
end
