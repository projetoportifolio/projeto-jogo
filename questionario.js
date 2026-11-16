
export const perguntas = [

    // POSIÇÃO 0 — INÍCIO
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder dúvidas, gerar imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                tipo: "avancar",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia poderia fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ],
                proxima: 1
            },
            {
                texto: "Isso é maravilhoso!",
                tipo: "avancar",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que a IA poderia ajudar em muitas tarefas da sua vida."
                ],
                proxima: 2
            }
        ]
    },

    // POSIÇÃO 1 — CAMINHO A
    {
        caminho: "A",
        enunciado: "Uma professora de tecnologia pede um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca com IA para encontrar informações relevantes.",
                tipo: "avancar",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar nas pesquisas."
                ],
                proxima: 3
            },
            {
                texto: "Escreve o trabalho com pesquisas tradicionais e conhecimentos próprios.",
                tipo: "saltar",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos.",
                    "Preferiu procurar respostas utilizando meios tradicionais."
                ],
                proxima: 4
            },
            {
                texto: "Decide explorar a narrativa da comunidade e pesquisar os impactos da IA.",
                tipo: "trocar",
                afirmacao: [
                    "Decidiu conhecer os impactos da IA na comunidade."
                ],
                proxima: 7
            }
        ]
    },

    // POSIÇÃO 2 — CAMINHO B
    {
        caminho: "B",
        enunciado: "Você decidiu explorar as possibilidades da IA. Agora a professora pede um trabalho sobre o uso dessa tecnologia em sala de aula. Como você começa?",
        alternativas: [
            {
                texto: "Pesquisa os benefícios e os riscos da IA.",
                tipo: "avancar",
                afirmacao: [
                    "Decidiu investigar os benefícios e os riscos da inteligência artificial."
                ],
                proxima: 7
            },
            {
                texto: "Utiliza ferramentas de IA para organizar suas ideias.",
                tipo: "saltar",
                afirmacao: [
                    "Percebeu que a IA pode ajudar na organização de informações."
                ],
                proxima: 8
            },
            {
                texto: "Troca para a narrativa escolar e participa do debate sobre o futuro do trabalho.",
                tipo: "trocar",
                afirmacao: [
                    "Decidiu levar suas descobertas para o debate escolar."
                ],
                proxima: 3
            }
        ]
    },

    // POSIÇÃO 3 — CAMINHO A
    {
        caminho: "A",
        enunciado: "Ferramentas de busca com IA podem facilitar a pesquisa. Agora você precisa participar de um debate sobre o impacto da IA no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego.",
                tipo: "avancar",
                afirmacao: [
                    "Passou a defender novas oportunidades profissionais criadas pela IA."
                ],
                proxima: 5
            },
            {
                texto: "Defende a proteção dos trabalhadores diante da automação.",
                tipo: "saltar",
                afirmacao: [
                    "Passou a discutir formas de reduzir as desigualdades geradas pela automação."
                ],
                proxima: 4
            },
            {
                texto: "Inventar uma fonte e apresentá-la como verdadeira.",
                afirmacao: [
                    "Inventou uma fonte para sustentar a resposta."
                ],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A fonte inventada foi identificada e o trabalho foi invalidado. Você falhou na missão e precisa recomeçar."
            }
        ]
    },

    // POSIÇÃO 4 — CAMINHO A
    {
        caminho: "A",
        enunciado: "Utilizar informações próprias traz um toque pessoal ao trabalho. Agora imagine que você precisa participar de um debate sobre o impacto da IA no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades profissionais.",
                tipo: "avancar",
                afirmacao: [
                    "Percebeu que a tecnologia pode impulsionar a inovação."
                ],
                proxima: 5
            },
            {
                texto: "Defende que os trabalhadores precisam de proteção diante da automação.",
                tipo: "saltar",
                afirmacao: [
                    "Sua preocupação motivou a criação de um grupo de estudos sobre ética na IA."
                ],
                proxima: 6
            },
            {
                texto: "Retorna à pergunta anterior para revisar suas ideias.",
                tipo: "retornar",
                afirmacao: [
                    "Decidiu revisar suas ideias antes de continuar o trabalho."
                ],
                proxima: 3
            }
        ]
    },

    // POSIÇÃO 5 — CAMINHO A
    {
        caminho: "A",
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate sobre como a IA impacta o trabalho do futuro. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que a IA pode criar novas oportunidades de emprego.",
                tipo: "avancar",
                afirmacao: [
                    "Defendeu que a tecnologia pode gerar novas oportunidades de trabalho."
                ],
                proxima: 6
            },
            {
                texto: "Organiza suas ideias para apresentar o trabalho à escola.",
                tipo: "saltar",
                afirmacao: [
                    "Organizou suas ideias e preparou a apresentação final."
                ],
                proxima: 11
            },
            {
                texto: "Publicar dados pessoais dos colegas sem autorização.",
                afirmacao: [
                    "Expôs dados pessoais dos colegas sem autorização."
                ],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A divulgação expôs os colegas e seu projeto foi suspenso. Você falhou na missão e precisa recomeçar."
            }
        ]
    },

    // POSIÇÃO 6 — CAMINHO A
    {
        caminho: "A",
        enunciado: "Depois do debate, você precisa organizar seu trabalho para apresentá-lo à escola. O que decide fazer?",
        alternativas: [
            {
                texto: "Organizar o exemplo, as fontes e os cuidados necessários.",
                tipo: "avancar",
                afirmacao: [
                    "Organizou as informações e preparou uma apresentação responsável sobre IA."
                ],
                proxima: 11
            },
            {
                texto: "Voltar à etapa anterior para revisar suas ideias.",
                tipo: "retornar",
                afirmacao: [
                    "Decidiu revisar suas ideias antes de concluir o trabalho."
                ],
                proxima: 5
            },
            {
                texto: "Trocar para a narrativa da comunidade e compartilhar o conhecimento adquirido.",
                tipo: "trocar",
                afirmacao: [
                    "Decidiu compartilhar seus conhecimentos com a comunidade."
                ],
                proxima: 10
            }
        ]
    },

    // POSIÇÃO 7 — CAMINHO B
    {
        caminho: "B",
        enunciado: "Você decidiu explorar as possibilidades da IA. Agora precisa criar uma imagem no computador que represente seu pensamento sobre essa tecnologia. O que faz?",
        alternativas: [
            {
                texto: "Cria uma imagem utilizando uma plataforma de design tradicional, como o Paint.",
                tipo: "avancar",
                afirmacao: [
                    "Notou que ferramentas tradicionais também podem estimular a criatividade."
                ],
                proxima: 9
            },
            {
                texto: "Cria uma imagem utilizando um gerador de imagens com IA.",
                tipo: "saltar",
                afirmacao: [
                    "Percebeu que a IA pode ajudar a transformar ideias em imagens."
                ],
                proxima: 8
            },
            {
                texto: "Acusar publicamente um colega sem qualquer prova.",
                afirmacao: [
                    "Acusou um colega publicamente sem provas."
                ],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A acusação sem provas prejudicou um colega e interrompeu a investigação. Você falhou na missão e precisa recomeçar."
            }
        ]
    },

    // POSIÇÃO 8 — CAMINHO B
    {
        caminho: "B",
        enunciado: "Sua imagem ficou pronta! Agora a professora pede que você explique como a tecnologia pode ajudar na criação artística. Qual atitude toma?",
        alternativas: [
            {
                texto: "Explica os benefícios e as limitações das ferramentas de IA.",
                tipo: "avancar",
                afirmacao: [
                    "Compreendeu que diferentes ferramentas podem contribuir para a criatividade."
                ],
                proxima: 9
            },
            {
                texto: "Compartilha sua imagem e explica como ela foi produzida.",
                tipo: "saltar",
                afirmacao: [
                    "Compartilhou seu processo criativo com os colegas."
                ],
                proxima: 10
            },
            {
                texto: "Retorna à etapa anterior para revisar sua criação.",
                tipo: "retornar",
                afirmacao: [
                    "Decidiu revisar sua criação antes de continuar."
                ],
                proxima: 7
            }
        ]
    },

    // POSIÇÃO 9 — CAMINHO B
    {
        caminho: "B",
        enunciado: "Durante a apresentação, surge uma discussão sobre imagens falsas e conteúdos criados por IA. Como você reage?",
        alternativas: [
            {
                texto: "Explica a importância de verificar a origem e a autenticidade das imagens.",
                tipo: "avancar",
                afirmacao: [
                    "Aprendeu a importância de verificar a origem dos conteúdos digitais."
                ],
                proxima: 10
            },
            {
                texto: "Troca para a narrativa escolar e organiza suas ideias para a apresentação.",
                tipo: "trocar",
                afirmacao: [
                    "Decidiu levar seus conhecimentos para a escola."
                ],
                proxima: 6
            },
            {
                texto: "Criar outro áudio falso e divulgá-lo como verdadeiro.",
                afirmacao: [
                    "Criou e divulgou outro áudio falso como verdadeiro."
                ],
                tipo: "gameover",
                disponivel: true,
                mensagem: "O novo áudio falso causou mais desinformação e a campanha foi interrompida. Você falhou na missão e precisa recomeçar."
            }
        ]
    },

    // POSIÇÃO 10 — CAMINHO B
    {
        caminho: "B",
        enunciado: "A escola decidiu preparar um esclarecimento para os moradores sobre o uso responsável da IA. O que você faz?",
        alternativas: [
            {
                texto: "Organizar o esclarecimento da escola e as dicas de verificação.",
                tipo: "avancar",
                afirmacao: [
                    "Organizou orientações para ajudar os moradores a reconhecer conteúdos suspeitos."
                ],
                proxima: 12
            },
            {
                texto: "Retornar à etapa anterior para revisar as informações.",
                tipo: "retornar",
                afirmacao: [
                    "Decidiu revisar as informações antes de apresentá-las."
                ],
                proxima: 9
            },
            {
                texto: "Expor conversas privadas de moradores sem autorização.",
                afirmacao: [
                    "Expôs conversas privadas de moradores sem autorização."
                ],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A exposição das conversas privadas encerrou sua participação na campanha. Você falhou na missão e precisa recomeçar."
            }
        ]
    },

    // POSIÇÃO 11 — PAUSA DA NARRATIVA A
    {
        caminho: "A",
        pausa: true,
        enunciado:
            "Você chegou à etapa de apresentação do trabalho escolar.\n\n" +
            "Reflita sobre os benefícios e os limites da inteligência artificial.\n\n" +
            "A conclusão da missão será apresentada na próxima etapa.",
        alternativas: []
    },

    // POSIÇÃO 12 — PAUSA DA NARRATIVA B
    {
        caminho: "B",
        pausa: true,
        enunciado:
            "Você chegou à etapa de orientação da comunidade.\n\n" +
            "Reflita sobre a importância de verificar informações e combater a desinformação.\n\n" +
            "A conclusão da missão será apresentada na próxima etapa.",
        alternativas: []
    }

];
