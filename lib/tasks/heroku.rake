namespace :heroku do
  task :reset do
    sh "heroku pg:reset DATABASE_URL --confirm bowserbook"
  end

  task :migrate do 
    sh "heroku run rake db:migrate"
  end

  task :seed do 
    sh "heroku run rake db:seed"
  end
end