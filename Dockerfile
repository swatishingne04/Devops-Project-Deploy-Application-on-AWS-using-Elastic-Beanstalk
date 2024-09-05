FROM amazonlinux:latest

#Install all necessary dependencies
RUN yum update -y &&\
     yum install -y httpd && \
     yum search wget && \
     yum install wget -y && \
     yum install unzip -y

#change directory
RUN cd /var/www/html

#Download website from github repo
RUN wget https://github.com/shingneswati/Dice/archive/refs/heads/master.zip

#unzip folder
RUN unzip master.zip 

#copy files into html directory
RUN cp -r  Dice-master/* /var/www/html

#remove unwanted folder
RUN rm -rf Dice-master master.zip

#expose port 80 on container
EXPOSE 80

#set the default application that will start when the container start.
ENTRYPOINT ["/usr/sbin/httpd","-D","FOREGROUND"]
