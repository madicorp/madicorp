FROM nginx:alpine
ADD docker/nginx/conf/sites.conf /etc/nginx/conf.d/default.conf
ADD docker/nginx/.htpasswd /etc/nginx/.htpasswd
ADD ./_site/ /var/www/html/

# For htpasswd generation help, follow this tutorial
# https://www.digitalocean.com/community/tutorials/how-to-set-up-http-authentication-with-nginx-on-ubuntu-12-10