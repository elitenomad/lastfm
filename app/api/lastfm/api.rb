module Lastfm
  class API < Grape::API
    version 'v1', using: :path, vendor: 'lastfm'
    format :json

    resource :artists do
      desc 'Return top artists by country.'
      get ':country' do
       Lastfmiefy::Client::Core.artists(ENV['LASTFM_API_KEY'],{ country: params[:country], page: params[:page] })
      end
    end

    resource :albums do
      desc 'Return artists albums by popularity.'
      get ':user' do
        Lastfmiefy::Client::Core.albums(ENV['LASTFM_API_KEY'],{ artist: params[:user], page: params[:page] })
      end
    end
  end
end