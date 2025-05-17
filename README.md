# 🤖 RH Transparente – Feedback com IA no Recrutamento

## 📝 Descrição breve

Este projeto propõe uma nova abordagem no processo de Recrutamento e Seleção (R&S), permitindo que empresas gerem **feedbacks personalizados** para candidatos não aprovados em uma vaga.  
A inteligência artificial analisa os currículos com base em critérios internos definidos pela empresa e também em comparação com o perfil de outros candidatos.  
Dessa forma, o feedback se torna **mais específico, útil e respeitoso**, indo além da tradicional mensagem automática de rejeição.

Para o candidato, é um diferencial: ao invés de apenas comparar seu currículo com a descrição da vaga apenas (como em muitas ferramentas de IA), o sistema leva em conta **o contexto real do processo seletivo**.

---

## 🎯 Motivação / Objetivo

Como candidata ativa no LinkedIn e observadora do mercado, percebi que muitas pessoas compartilham da mesma frustração: o famoso *ghosting* ou mensagens negativas genéricas sem explicação.

Sabendo que muitas empresas não têm tempo ou estrutura para responder de forma personalizada, pensei:  
**“E se a IA pudesse ajudar também do lado de quem recruta?”**

Assim nasceu a ideia de criar um fluxo onde a empresa define critérios, a IA processa os currículos, e cada candidato recebe uma resposta mais humana, informativa e construtiva.

---

## ✨ Funcionalidades

- Triagem automatizada de currículos com base em critérios definidos pela empresa
- Geração de feedback personalizado para candidatos não selecionados
- Comparação entre currículos recebidos e os critérios da vaga
- Simulação de site com páginas para:
  - Empresa (postar vaga, visualizar candidatos)
  - Candidato (se candidatar, visualizar feedback[via código seguro])
  - Solicitação de parceria
- Respostas simplificadas, objetivas e respeitosas para todos os envolvidos

---

##⚙️ Como usar

> 🧡 **Observação importante:**  
Não sou programadora profissional, e tenho consciência de que para esse projeto funcionar plenamente em um ambiente real, seria necessário integrar:
- Inputs de usuários
- Ferramentas de envio automático de e-mails (como SMTP, SendGrid ou Gmail API)
- Back-end para tratar dados com segurança
- Banco de dados para armazenar currículos e resultados
- Discussões éticas com times técnicos e de RH

Por isso, neste projeto, o foco foi criar uma **prova de conceito simples**, usando a tecnologia aprendida durante a Imersão IA da Alura.  
As informações estão inseridas diretamente no código, simulando o que futuramente seriam entradas feitas por usuários.

---

## 🔁 Fluxo básico do sistema

1. A **empresa publica uma vaga**, definindo:
   - Palavras-chave desejadas
   - Formação exigida
   - Experiência mínima
2. O **candidato se candidata** com nome, e-mail e currículo.
3. O **sistema classifica** os currículos em dois grupos:
   - Atendem aos critérios
   - Não atendem aos critérios
4. A empresa recebe os currículos aprovados para análise manual.
5. Para os candidatos **não aprovados (tanto na primeira triagem da IA, quanto na segunda triagem pela empresa)**:
   - Um agente IA gera um **feedback individual**, com base nos critérios da vaga e nos currículos concorrentes.

🧠 Observações pensadas para versões futuras:
1. Se o candidato passar na primeira triagem, a empresa pode optar por enviar uma pergunta adicional, como:

“Conte brevemente por que você gostaria de trabalhar conosco.”
(algo semelhante a uma cover letter curta e moderna, para melhor análise dos currículos selecionados)

2. A empresa poder escolher:

Enviar o feedback construtivo diretamente no e-mail automático (feito no meu projeto), ou

Enviar apenas um link para que o candidato acesse o feedback no site, mediante autenticação (idealizado apenas na visualização do site).

	🎯 Por quê?
	Respeito à privacidade (empresa e candidato):
	Algumas empresas preferem manter os feedbacks centralizados fora do e-mail, por confidencialidade, segurança jurídica ou para evitar compartilhamento indevido.

	Consentimento ativo do candidato:
	Dar ao usuário a opção “clique aqui para ver seu feedback” respeita quem não quer receber esse tipo de informação. Isso é mais cuidadoso, moderno e empático.

	Transparência com autonomia:
	A HANA RH se posiciona como uma IA que valoriza o humano — e oferecer o acesso controlado ao feedback é uma forma prática de mostrar isso.

--- 

## 🔧 Pré-requisitos

Para rodar no Google Colab:

python
Copy
Edit
!pip install google-genai
!pip install -q google-adk

import os
from google.colab import userdata
from google import genai
os.environ['GOOGLE_API_KEY'] = userdata.get('GOOGLE_API_KEY')

from google.adk.agents import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

---

## 🧰 Tecnologias utilizadas

Google Colab – ambiente de desenvolvimento
Python – linguagem principal
Gemini 2.0 Flash – modelo de IA generativa da Google
Google GenAI – biblioteca de integração com IA
Google ADK – Agents Development Kit

---

## 📁 Estrutura de pastas

rhTransparente-Alura/
├── projetoRH01.ipynb        # Lógica da IA com agentes
├── README.md                # Documentação do projeto
└── HanaRH_Visualizacao/     # Interface visual do site
    ├── index.html           # Página inicial do site
    ├── style.css            # Estilos visuais (cores, fontes, layout)
    ├── script.js            # Scripts básicos de interação (ex: botões)
    └── flor.png             # Imagem usada no site

---

## 📊 Status / próximos passos

✅ Teste de geração de feedbacks com IA
✅ Criação de site visual (HTML, CSS, JS)
✅ Estrutura de simulação de candidaturas e triagem

⏳ Implementar envio real de e-mails automáticos
⏳ Transformar entrada de dados em formulários dinâmicos
⏳ Salvar candidatos e vagas em banco de dados real
⏳ Adicionar autenticação e segurança
⏳ Revisar pontos éticos sobre feedback automatizado

---

## 🪪 Licença
Este projeto está licenciado sob a licença MIT.

---

## 💡 Créditos e agradecimentos
Feito por Ely Jennipher.

Estou muito feliz por ter finalizado este projeto — é o meu primeiro! É simples, mas nem acredito que consegui! 😄

Agradecimento especial à comunidade da Alura, por propor esse desafio e por todo o apoio durante o processo.

Também quero agradecer aos professores desta 3ª edição:
Fabricio Carraro, Luciano Martins e Valquíria Alencar, que foram didáticos, pacientes e tornaram o aprendizado muito mais acessível.
