Rails.application.routes.draw do
  root to: 'landing#index'
  mount Lastfm::API => '/api'

  # Hijack other routes
  get '/*path', to: 'landing#index'
end
