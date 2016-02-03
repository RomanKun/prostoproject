heroku login
heroku create
heroku config:set NODE_ENV=production
git add -A
git commit -m "first deploy on heroku"
git push heroku master
heroku ps:scale web=1
heroku open