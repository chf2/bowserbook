Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do  
    resources :users, only: [:create, :update, :show, :destroy]
  end
  resources :users, only: [:new]
  resource :session, only: [:create, :new, :destroy]
end
