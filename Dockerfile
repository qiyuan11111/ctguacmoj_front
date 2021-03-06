FROM ubuntu:18.04
MAINTAINER qiyuan
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
COPY tomcat/apache-tomcat-8.5.60/ /usr/local/apache-tomcat-8.5.60/
COPY tomcat/OnlineJudge.war /usr/local/apache-tomcat-8.5.60/webapps/OnlineJudge.war
COPY comparator/ /usr/lib/comparator/
COPY config/start.sh /usr/local/apache-tomcat-8.5.60/start.sh
RUN	apt-get update --fix-missing && apt-get install -y apache2 openjdk-8-jdk vim --fix-missing \
	&& cd /usr/local && chmod 777 /usr/local/apache-tomcat-8.5.60/start.sh \
	&& mkdir /usr/local/apache-tomcat-8.5.60/logs \
	&& chmod 755 -R /usr/local/apache-tomcat-8.5.60 && chmod 700 /usr/lib/comparator/libcmpfile.so \
	&& a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests
COPY src /var/www/html
COPY config/apache2.conf /etc/apache2/apache2.conf
COPY config/000-default.conf /etc/apache2/sites-enabled/000-default.conf
EXPOSE 8080
EXPOSE 80
CMD ["/bin/sh", "/usr/local/apache-tomcat-8.5.60/start.sh"]
