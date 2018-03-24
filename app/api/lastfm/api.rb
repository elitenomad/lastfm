module Lastfm
  class API < Grape::API
    version 'v1', using: :path, vendor: 'lastfm'
    format :json
    prefix :api

    resource :artists do
      desc 'Return top artists by country.'
      get ':country' do
       Lastfmiefy::Client::Core.artists(ENV['LASTFM_API_KEY'],{ country: params[:country] })
      end
    end

    resource :albums do
      desc 'Return artists albums by popularity.'
      get ':user' do
        Lastfmiefy::Client::Core.albums(ENV['LASTFM_API_KEY'],{ user: params[:user] })
      end
    end
  end
end