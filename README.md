# README

The goal of the web application is to use the Gem (https://github.com/elitenomad/lastfmiefy) functionality and provide a
frontend (Used React to build front-end components) 

This README would normally document whatever steps are necessary to get the
application up and running on Localhost.

* Deployment Heroku:
    Deployed the Rails 5.1 and React app to heroku and the app can be accessed at
        https://hidden-escarpment-30441.herokuapp.com/
        
Things you may want to cover:
* Pre-requisites:
     Homebrew: 
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
     Ruby: 
        Install RVM \curl -sSL https://get.rvm.io | bash -s stable --ruby
        rvm install 2.4.1
     Node and NPM: 
        https://nodejs.org/en/download/
     yarn:
        brew install yarn
     bundler:
        gem install bundler

* Ruby version
    2.4.1

* System dependencies

* Configuration
    Create a .env file in the project directory.
    (Just to make the installation easier i enabled public access to this file. In general this file is not exposed in 
    source code repos like github and bitbucket).
        LASTFM_API_KEY=YOUR_API_KEY
        LASTFM_API_SECRET=YOUR_API_SECRET

* Database creation
    bundle exec rake db:create
    bundle exec rake db:migrate

* Database initialization
    No seed file used or required.
    
* How to run the test suite
    Rails specs: bundle exec rspec spec/
    JS spec: yarn test

* Services (job queues, cache servers, search engines, etc.)
    No queues or delayed jobs used.

* Deployment instructions
    (At the moment i disabled public access on heroku, only i can deploy to heroku to the above mentioned domain)
    To deploy as a fresh site on heroku,
    
    heroku create
    git push heroku master 
    heroku run rails db:migrate
    heroku config:set LASTFM_API_KEY=YOUR_API_KEY
    heroku config:set LASTFM_API_SECRET=YOUR_API_SECRET

* Shortcuts/compromises
    Basic CSS is implemented. Did'nt work to make the app responsive.
    Page param is set to state at component level and not as a url params.Its not a ideal as page refresh will 
    reset param value :) 
    Chose rails so i could easily push it to Heroku
    Pagination and Auto-complete are Publicly available react components. I imported and resused them in this app.

* ...
