Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do  
    resources :users, only: [:update, :show, :destroy, :index]
    resources :posts, only: [:create, :show, :update, :destroy, :index]
    resources :comments, only: [:create, :show, :destroy, :index]
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:create, :new, :destroy]
end
