require 'sinatra'
require 'geocoder'
require 'forecast_io'

lat_lon= geocoder.search("nyc").first.coordinates



get '/weather' do
  ## when someone asks for localhost:3000/weather
  erb :index
end

get '/frank-says' do
  #when someone asks for localhost:3000/frank-says
  '<h1>Diddy</h1>'
end