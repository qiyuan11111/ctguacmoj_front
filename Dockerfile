FROM ubuntu:18.04
MAINTAINER qiyuan
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
COPY tomcat/apache-tomcat-8.5.60 /usr/local/apache-tomcat-8.5.60
RUN apt-get update --fix-missing && apt-get install -y apache2 --fix-missing \
	&& cd /usr/local && chmod 755 -R apache-tomcat-8.5.60 
COPY tomcat/OnlineJudge.war /usr/local/apache-tomcat-8.5.60/webapps/OnlineJudge.war
COPY src /var/www/html
COPY config/apache2.conf /etc/apache2/apache2.conf
COPY config/apache2_start.sh /etc/apache2/apache2_start.sh
RUN	chmod 777 /etc/apache2/apache2_start.sh && /bin/sh /usr/local/apache-tomcat-8.5.60/bin/startup.sh
EXPOSE 8080
CMD [ "/bin/sh","/etc/apache2/apache2_start.sh"]
