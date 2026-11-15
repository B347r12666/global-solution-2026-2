# AI.md — Uso de Inteligência Artificial

## 1. Ferramentas utilizadas
Durante o desenvolvimento do projeto, foi utilizado o **ChatGPT (OpenAI)** como ferramenta de apoio técnico e consultoria de aprendizado. O objetivo principal foi acelerar a compreensão de conceitos do ecossistema React e explorar alternativas arquiteturais para as funcionalidades da aplicação.

---

## 2. Interações realizadas
Abaixo estão exemplos reais de consultas realizadas durante o desenvolvimento e como os retornos foram aproveitados:

### Exemplo 1 — Criação de componentes
> **Prompt:** *"Como posso criar um componente para apresentar as etapas de uma viagem?"*
* **Resposta e aproveitamento:** A IA sugeriu uma estrutura de linha do tempo vertical utilizando React, organizando visualmente origem, destino e meios de transporte. A estrutura serviu de base conceitual, sendo adaptada para a identidade visual e estilização do projeto.

### Exemplo 2 — Integração de componentes
> **Prompt:** *"Como passo os dados do componente Rotas para o EtapasViagem?"*
* **Resposta e aproveitamento:** A IA explicou o fluxo de dados unidirecional do React e o uso de *props* para transmitir informações entre componentes pai e filho, permitindo estruturar corretamente a comunicação da tela de trajetos.

### Exemplo 3 — Utilização de mapas
> **Prompt:** *"Consigo colocar um mapa de verdade?"*
* **Resposta e aproveitamento:** A IA apresentou bibliotecas e tecnologias para mapas interativos, como **Leaflet** e **OpenStreetMap**, possibilitando substituir representações estáticas por uma visualização geográfica real e gratuita.

---

## 3. Aplicação no projeto
De forma consolidada, a IA foi consultada em etapas pontuais do desenvolvimento para:
* Esclarecer dúvidas sobre **React**, **JavaScript** e ciclo de vida/comunicação de componentes.
* Sugerir melhorias e identificar causas de erros em trechos específicos de código.
* Apoiar a estruturação da passagem de dados (*props*) entre os componentes `Rotas` e `EtapasViagem`.
* Mapear bibliotecas e APIs viáveis para a implementação de mapas interativos e cálculo de trajetos multimodais.

Todas as sugestões foram analisadas e adaptadas às necessidades reais da aplicação. A arquitetura, a implementação e a organização do código permaneceram integralmente sob responsabilidade dos integrantes do grupo.

---

## 4. Validação das respostas
Nenhuma sugestão foi incorporada diretamente sem revisão. O processo de validação seguiu as seguintes etapas:
* **Análise e adaptação:** Os trechos sugeridos foram ajustados para respeitar a estrutura de pastas, nomenclaturas e padrões visuais (como a adequação de estilos genéricos para a folha de estilos do projeto).
* **Testes práticos:** Os códigos foram executados e testados localmente na aplicação para verificar o comportamento real, corrigindo eventuais quebras de layout ou falhas de integração.
* **Controle de escopo:** Sugestões mais complexas — como integrações completas com APIs externas de rotas multimodais — foram documentadas como possibilidades de evolução futura, mantendo o foco nas entregas planejadas para esta etapa.

---

## 5. Análise crítica
O uso da Inteligência Artificial mostrou-se positivo como apoio ao aprendizado, acelerando o entendimento de conceitos fundamentais do React e ampliando a visão sobre ferramentas disponíveis no mercado (como o Leaflet).

Como limitação, observou-se que a ferramenta frequentemente fornece soluções genéricas ou desatualizadas em relação às versões das bibliotecas utilizadas, além de nem sempre considerar o contexto completo dos demais componentes do projeto. Isso exigiu análise crítica constante, consulta à documentação oficial e refatoração manual para garantir que o código funcionasse corretamente.

Assim, a IA atuou estritamente como suporte técnico e didático, enquanto as decisões de projeto, a escrita do código final e a validação dos resultados foram conduzidas pelos integrantes do grupo.