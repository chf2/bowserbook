Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do  
    resources :comments, only: [:create, :show, :destroy, :index]
    resources :friendships, only: [:create, :destroy, :update, :show]
    resources :messages, only: [:create, :show, :update, :destroy, :index]
    resources :posts, only: [:create, :show, :update, :destroy, :index]
    resources :users, only: [:update, :show, :destroy, :index]
    resources :notifications, only: [:create, :show, :index, :update, :destroy]
  end
  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:new, :create]
end
