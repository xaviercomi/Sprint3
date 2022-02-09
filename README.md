# Sprint3
IT Academy - Patterns


Patterns (patrons creacionals, estructurals, comportament) 

- NECESSARI! instalar el modul 'chalk' per utilitzar el singleton.js
    Anar al menu Terminal => New Terminal o utilitzar les tecles 'Ctrl+Shift+5'
    Desde el terminal teclejar $ npm install chalk 

- NECESSARI! instalar el modul 'events' per utilitzar el patró observer.  
    Anar al menu Terminal => New Terminal o utilitzar les tecles 'Ctrl+Shift+5'
    Desde el terminal teclejar $ npm install event

- NECESSARI! instalar el modul 'amqplib' (advance message queue protocol) per utilitzar el patró publisher.
    Anar al menu Terminal => New Terminal  utilitzar les tecles 'Ctrl+Shift+5'
    Desde el terminal teclejar $ npm install amqplib

    Caldrà descarregar i instalar RabbitMQ, el servidor o "broker" de missatgeria de codi obert basat en el
    protocol AMQP. RabbitMQ utilitza la llibreria de client Erlang per el que s'haurá d'instal·lar abans de utilitzar-ho. Ho podeu fer desde https://www.erlang.org/downloads.

        altres opcions: Homebrew on OS X: brew install erlang
                        Ubuntu and Debian: apt-get install erlang
                        Fedora: yum install erlang

    -- Instal·lant RabbitMQ

        opció A:  Utilitzant chocolatery (recomanat) a windows: choco install rabbitmq

        opció B: Instalador oficial. https://www.rabbitmq.com/install-windows.html#installer
                 
        altre opcions: Homebrew on OS X: brew update (actualitza primer)
                                         brew install rabbitmq
