require 'sinatra/base'

class Thermostat < Sinatra::Base

  enable :sessions
  set :views, proc {File.join(root,'.', 'views')}

  get "/" do
    if session[:temperature]
      @temperature = session[:temperature]
    else
      @temperature = 20
    end
    erb :index
  end

  post '/' do
    session[:temperature] = params[:temperature]
  end

  run! if app_file == $0

end
