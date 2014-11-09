#!/bin/bash
echo "What do you want to deploy? 'w' for web, 'j' for js-tests"

WEB='w'
JS='j'

read LOC

if [[ "$LOC" == "$WEB" ]]; then
    LOC="web"
elif [[ "$LOC" == "$JS" ]]; then
    LOC="js-tests"
else 
    echo "Not valid, defaulting to web"
    $LOC = "web"
fi 

cd ~/FattesSloPizzaMockup
git pull
sudo rm -rf /var/www/html/*
sudo cp -r ~/FattesSloPizzaMockup/$LOC/* /var/www/html/
