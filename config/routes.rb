Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do  
    resources :users, only: [:create, :update, :show, :destroy, :index]
  end
  resources :users, only: [:new]
  resource :session, only: [:create, :new, :destroy]
end
