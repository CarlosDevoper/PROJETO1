# UFC e a comunidade

> Status: Desenvolvido ✔️

# Link para o Download da APK(Aplicativo)
### https://drive.google.com/file/d/1JD8W-EIe6rO7wuGaHENG1wGvGLobwaIp/view?usp=sharing

# Equipe: 
### RGCPF

# Projeto: 
### UFC e a comunidade

# Participantes: 
### CARLOS RYAN MARQUES CANDIDO
### JEAN CARLOS DE OLIVEIRA VIEIRA
### CARLOS MANOEL BONIFACIO DE SOUZA
### PAULO SERGIO GUEDES NEMER FILHO
### JOSÉ FLÁVIO SAMPAIO NETO

# Cliente: 
### CÁTIA LUZIA OLIVEIRA DA SILVA

# Descrição do projeto:

  Esse Trabalho de projeto integrado Integrado I terá como cliente o projeto de extensão UFC e a Comunidade, projeto criado e administrado por Cátia Luzia Oliveira da Silva, professora associada da Universidade Federal do Ceará - Instituto UFC-Virtual. O projeto tem como objetivo o letramento digital de adultos da comunidade do Planalto-Pici, localizada no entorno do Campus do Pici da Universidade Federal do Ceará (UFC). A administradora, Cátia Luiza organizava reuniões presenciais aos sábados no bloco de sistemas e mídias digitais da UFC, desta forma, promovendo o ensino, troca de informações e a convivência. Porém, em decorrência da pandemia de COVID-19, os encontros presenciais se tornaram inviáveis e o meio de execução do projeto passou a ser sobretudo através do whatsapp.
	Visto isso, surgiu a necessidade de um ambiente virtual, o qual armazenaria os conteúdos de ensino e disponibilizá-los de maneira prática e fácil, além de promover a comunicação entre os usuários e a divulgação do projeto. Dito isso, um dos principais obstáculos apresentados é o Precário letramento digital, bem como a baixa escolaridade apresentada por alguns dos membros. 
	Portanto, o objetivo deste trabalho é criar uma aplicação mobile o qual sirva como um espaço de interação social e aprendizado capaz de armazenar e reproduzir aulas por meio de mídias variadas em um formato que respeite as dificuldades dos participantes com o uso de tecnologias e funcione em uma linguagem que lembre a interação com as alunas no formato presencial.

# Mapeamento de Funcionabilidades

<table border="1">
    <tr>
        <td><b><h3>Código</td>
        <td><b><h3>Funcionabilidade</td>
        <td><b><h3>Situação</td>
        <td><b><h3>Como foi Implementado</td>
    </tr>
    <tr>
        <td>RF0001</td>
        <td>Cadastro de Aluno </td>
        <td>Feito ✔️</td>
        <td>"telas/cadastro/register.js" neste arquivo, os dados do formulários são enviados para o backend pela função sendForm(), utilizando a rota "/cadastro" para o servidor, na pasta "Controller.js"(pasta do servidor) a rota "cadastro" vai inserir os dados enviados pelo formulário na tabela de usuários do banco de dados  </td>
    </tr>
    <tr>
        <td>RF0002</td>
        <td>Autenticação/Login</td>
        <td>Feito ✔️ </td>
        <td>"telas/Login/Login.js" este arquivo, os dados do formulários são enviados para o backend pela função sendForm(), utilizando a rota "/login" para o servidor, na pasta "Controller.js"(pasta do servidor) a rota "login" vai verificar se o usuário e senha (dados inseridos no formulario) existem no banco de dados para autenticar o login</td>
    </tr>
    <tr>
        <td>RF0003</td>
        <td>Página de usuário(Aluno)</td>
        <td>Feito ✔️</td>
        <td>"telas/Usuario/usuario.js" este arquivo constrói a tela de usuário</td>
    </tr>
    <tr>
        <td>RF0004</td>
        <td>Exibição de Aulas</td>
        <td>Feito ✔️</td>
        <td>"telas/Usuario/usuario.js" este arquivo constrói a tela de usuário, e mostra todas as aulas cadastradas pelo ADM(professor ou desenvolvedor) através de uma da função sendForm() que vai enviar uma requisição(rota "exib")para o banco de dados, exigindo todas as aulas cadastradas na tabela de aulas do banco de dados, na pasta "Controller.js"(pasta do servidor) a rota "exib" vai enviar todas as aulas cadastradas na tabela de aulas do banco de dados</td>
    </tr>
    <tr>
        <td>RF0005</td>
        <td>Comentar</td>
        <td>em Desenvolvimento ⚠️</td>
        <td>"models/comment.js" nesta pasta é criada a relação entre as tabelas(do banco de dados) de usuários e comentários, um usuário podendo ter vários comentários</td>
    </tr>
    <tr>
        <td>RF0006</td>
        <td>Leitura por Áudio ❗</td>
        <td>Nãp Iniciado</td>
        <td></td>
    </tr>
    <tr>
        <td>RF0007</td>
        <td>Ajuda ❗</td>
        <td>Nãp Iniciado</td>
        <td></td>
    </tr>
    <tr>
        <td>RF0008</td>
        <td>Suporte/Feedback ❗</td>
        <td>Nãp Iniciado</td>
        <td></td>
    </tr>
    <tr>
        <td>RF0009</td>
        <td>Teste/Quiz ❗</td>
        <td>Nãp Iniciado</td>
        <td></td>
    </tr>
    <tr>
        <td>RF0010</td>
        <td>Autenticação/Login (como Administrador)</td>
        <td>Feito ✔️ </td>
        <td>Nas telas de login e cadastro possui um botão (Entrar como Administrador), que direciona os usuários para a tela de login como ADM,nesta tela os dados do formulário são enviados para o backend pela função sendForm(), utilizando a rota "/loginAdm" para o servidor, na pasta "Controller.js"(pasta do servidor) a rota "loginAdm" vai verificar se o usuário e senha (dados inseridos no formulario) existem no banco de dados( e se o usuário tem a chave de administrador, ou seja, se ele for um administrador) para autenticar o login</td>
    <tr>
        <td>RF0011</td>
        <td>Página de Administrador</td>
        <td>Feito ✔️</td>
        <td>"telas/Administrator/usuario.js" este arquivo constrói a tela de usuário</td>
    </tr>
    <tr>
        <td>RF0012</td>
        <td>Cadastro de Administrador</td>
        <td>Feito ✔️</td>
        <td>Na tela de Administrador, no menu localizado na barra inferior do aplicativo, ao clicar no icone com o nome "Cadastrar", é exibido um formulário de cadastro do ADM, que através da função senForm() envia os dados para o banckend, pela mesma rota utilizada na tela de cadastro de alno(mudando apenas a chave de administrador), na pasta do servidor a rota vai cadastrar o administrador na tabela de usuário do banco de dados</td>
    </tr>
    <tr>
        <td>RF0013</td>
        <td>Cadastro de Aulas</td>
        <td>Feito ✔️</td>
        <td>Na tela de Administrador, no menu localizado na barra inferior do aplicativo, ao clicar no icone com o nome "Aula", é exibido um formulário de cadastro de aulas, que através da função senForm() envia os dados para o banckend, pela mesma rota "aulas", na pasta do servidor a rota vai cadastrar a aula no banco de dados que automaticamente já é exibida na tela de usuários(alunos)</td>
    </tr>
    <tr>
</table>
