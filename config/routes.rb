Rails.application.routes.draw do
  mount Lastfm::API => '/'
end
