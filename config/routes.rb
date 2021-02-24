# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do

  devise_for :users, path: 'admin', path_names: { sign_in: 'login' }

  root 'homepages#index'

  get '/costa-rica', to: 'homepages#index'
  get '/national-parks', to: 'homepages#index'
  get '/northeast', to: 'homepages#index'
  get '/blog', to: 'homepages#index'

  namespace :api do
    namespace :v1 do
      resources :blogs, only: [:index, :show, :edit, :update, :destroy]
    end
  end
end
