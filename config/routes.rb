Rails.application.routes.draw do
  root 'characters#index'
  resources :characters

  resources :fights, only: [:create, :index]
end
