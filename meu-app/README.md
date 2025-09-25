�� Objetivo 
O aluno deverá desenvolver um aplicativo simples em React Native com Expo, aplicando os conceitos vistos em aula: 
● componentes base, 
● props, 
● JSX, 
● componentes personalizados. 
O app deverá rodar no navegador (Web), sem necessidade de celular ou emulador. 

�� Descrição do Trabalho 
O aplicativo deve ser um App de Apresentação Pessoal, contendo: 
● Um cabeçalho (Header) fixo, com um título (exemplo: “Meu App de Apresentação”). ● Um componente personalizado (Card), que receba via props: 
○ nome → o nome do aluno. 
○ descricao → um hobby, interesse ou frase curta. 
○ imagem → pode ser uma foto pessoal ou uma imagem da internet.
● O App.js deve organizar os componentes, exibindo pelo menos dois Cards diferentes. 
● O projeto deve usar pelo menos 3 componentes base do React Native (ex.: Text, Image, ScrollView, Button, TextInput). 
● Caso o conteúdo ultrapasse a tela, deve usar ScrollView para permitir rolagem. 

�� Estrutura sugerida dos arquivos 
● App.js → organiza os componentes. 
● Header.js → componente com título fixo. 
● Card.js → componente que recebe props (nome, descricao, imagem). ● assets/ → pasta para imagens usadas no app (se houver). 

�� Etapas a seguir 
Criar o projeto 
npx create-expo-app meu-app 
cd meu-app 
npm install 
npm run web 

1. �� Verifique se abre no navegador. 
2. Criar o componente Header 
○ Arquivo: Header.js. 
○ Mostrar um título fixo no topo da tela (por exemplo: “Meu App de 
Apresentação”). 
3. Criar o componente Card
○ Arquivo: Card.js. 
○ Receber props (nome, descricao, imagem). 
○ Mostrar as informações organizadas em uma caixinha. 
Exemplo de uso no App: 
<Card nome="Maria" descricao="Gosto de música" imagem={...} /> <Card nome="João" descricao="Curto esportes" imagem={...} /> 
○ 
4. Editar o App.js 
○ Importar e usar o Header no topo. 
○ Mostrar pelo menos dois Cards diferentes logo abaixo. 
Testar no navegador 
npm run web 

5. �� Conferir se: 
○ O título aparece no topo. 
○ Os Cards aparecem com nome, descrição e imagem. 
○ Se o conteúdo passa da tela, a rolagem funciona. 

�� Como rodar no navegador (Web) 
No terminal, dentro da pasta do projeto: 
npm install 
npx expo start --web 

�� O app abrirá no navegador (geralmente em http://localhost:19006).
✅ Critérios de Avaliação 
● Estrutura organizada do projeto. 
● Uso correto de pelo menos 3 componentes base. 
● Criação e uso de componente personalizado com props. 
● Criatividade (cores, imagens, textos, estilo). 

�� Entrega do Trabalho 
● Compactar a pasta do projeto em .zip (sem a pasta node_modules/). 
Nomear o arquivo assim: 
NomeAluno_TrabalhoBimestre.zip 
● (Exemplo: MariadaSilva_TrabalhoBimestre.zip) 
● Enviar para o e-mail: patricia.bassan@unisantacruz.edu.br 

�� Checklist do Aluno 
● Projeto roda no navegador com npx expo start --web. 
● Header criado e exibido no topo. 
● Card criado, recebendo props (nome, descricao, imagem). ● Uso de pelo menos 3 componentes base (Text, Image, ScrollView, etc.). ● Conteúdo rolável com ScrollView (se necessário). 
● Projeto enviado em .zip sem node_modules/.

