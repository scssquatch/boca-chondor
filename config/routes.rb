Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  resources :names, only: %i[index create]
  get 'generate', to: 'names#generate'
  root 'home#index'
end
