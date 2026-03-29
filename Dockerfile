FROM propentatech/portfolios-formation-dev-web2026:latest

RUN mkdir -p /usr/share/nginx/html/portfolio-njmoise/
RUN rm -rf /usr/share/nginx/html/portfolio-njmoise/*

COPY . /usr/share/nginx/html/portfolio-njmoise/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
