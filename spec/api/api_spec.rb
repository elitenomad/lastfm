require 'rails_helper'

RSpec.describe Lastfm::API do
  context 'GET /api/v1/artists/:country' do
    it 'returns an empty array of statuses' do
      get '/api/v1/artists/span'
      expect(response.status).to eq(200)
      expect(JSON.parse(response.body)).to have_key("error")
    end

    it 'returns an array of artists per country' do
      get '/api/v1/artists/spain'
      expect(response.status).to eq(200)
      expect(JSON.parse(response.body)).not_to eq []
    end
  end

  context 'GET /api/v1/albums/:artist' do
    it 'returns an empty array of statuses' do
      get '/api/v1/albums/asfffafafadsfad'
      expect(response.status).to eq(200)
      expect(JSON.parse(response.body)).to have_key("error")
    end

    it 'returns an array of artists per country' do
      get '/api/v1/albums/Cher'
      expect(response.status).to eq(200)
      expect(JSON.parse(response.body)).not_to eq []
    end
  end
end