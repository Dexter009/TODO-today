# require 'api_constraints'
# add: `scope module: :v1, constraints: ApiConstraints.new(version: 1) do` to use versioning

Rails.application.routes.draw do

  namespace :api do
     namespace :v1  do
      # add necessary resources here e.g:
      # resources :sessions, only: [:create, :destroy]
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end

  get '/404', to: 'errors#not_found'
  get '/500', to: 'errors#internal_server_error'
end
