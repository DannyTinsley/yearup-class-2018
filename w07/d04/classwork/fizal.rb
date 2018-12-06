require 'sinatra'

get '/random' do
  ## when someone asks for localhost:3000/random
  erb :index
end

get '/frank-says' do
  #when someone asks for localhost:3000/frank-says
  '<h1>Diddy</h1>'
end