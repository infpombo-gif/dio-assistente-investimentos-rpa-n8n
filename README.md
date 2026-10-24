# Assistente de Investimentos com RPA e n8n

## Sobre o projeto

Projeto desenvolvido como atividade prática de automação com Python, n8n e integração de dados. O objetivo é extrair informações de clientes, consultar uma base de investimentos e preparar mensagens educativas personalizadas de acordo com o perfil de cada cliente.

## Objetivos

- Automatizar a extração de dados de uma página web com Python.
- Enviar dados para um workflow por meio de um Webhook HTTP.
- Processar os registros recebidos no n8n.
- Consultar uma base CSV de investimentos usando HTTP Request.
- Preparar mensagens personalizadas com base no perfil do investidor.
- Documentar testes, limitações e possibilidades de evolução.

## Tecnologias utilizadas

- Python
- Google Colab
- Requests
- Beautiful Soup
- n8n Cloud
- Webhook HTTP
- HTTP Request
- JavaScript
- Git e GitHub

## Arquitetura da solução

1. O Python acessa a página de demonstração e extrai os dados dos clientes.
2. Os registros são enviados ao n8n por meio de uma requisição POST.
3. O Webhook recebe os dados e o nó Code organiza os registros.
4. O HTTP Request consulta a base CSV de investimentos.
5. Os dados podem ser relacionados pelo perfil do cliente.
6. As mensagens são preparadas de acordo com os dados disponíveis.

## Integração e testes

A extração dos clientes foi executada no Google Colab. O envio ao Webhook foi validado com resposta HTTP 200 e a mensagem `Workflow was started`. O nó Code foi testado para organizar os registros recebidos.

A consulta à base CSV também foi executada pelo nó HTTP Request.

## Limitação da integração com IA

A integração com a API da OpenAI não foi concluída devido à indisponibilidade de créditos na conta utilizada. Para permitir a continuidade do projeto sem custos adicionais, a geração de mensagens poderá ser implementada por meio de regras em JavaScript.

Essa alternativa é uma simulação determinística de mensagens personalizadas e não equivale à geração por um modelo de inteligência artificial. A integração real com IA permanece como melhoria futura.

## Segurança e responsabilidade

Os dados utilizados são provenientes de uma página de demonstração. Não devem ser adicionadas credenciais, chaves de API ou informações pessoais reais ao repositório público.

As mensagens possuem finalidade educativa e não constituem recomendações financeiras profissionais.

## Próximas melhorias

- Finalizar o relacionamento entre clientes e investimentos no Merge.
- Implementar e testar a geração de mensagens em JavaScript.
- Integrar um serviço de IA quando houver acesso à API.
- Automatizar o envio de e-mails com as credenciais apropriadas.
- Adicionar capturas de tela das execuções e resultados.

## Status

Projeto em desenvolvimento, com extração Python, recebimento por Webhook e consulta da base CSV testados. As etapas restantes devem ser validadas antes de considerar o workflow completo.
